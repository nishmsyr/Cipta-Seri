
exports.handler = async function (event) {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: "Method Not Allowed"
        };
    }

    try {
        // Read URL-encoded form data.
        const rawBody = event.isBase64Encoded
            ? Buffer.from(event.body || "", "base64").toString("utf8")
            : (event.body || "");

        const params = new URLSearchParams(rawBody);

        // Honeypot: silently ignore spam.
        if ((params.get("website") || "").trim()) {
            console.log("Spam blocked by honeypot");

            return {
                statusCode: 200,
                headers: { "Content-Type": "text/plain" },
                body: "Success"
            };
        }

        const name = (params.get("name") || "").trim();
        const phone = (params.get("phone") || "").trim();
        const email = (params.get("email") || "").trim();
        const service = (params.get("service") || "").trim();
        const budget = (params.get("budget") || "").trim();
        const address = (params.get("address") || "").trim();
        const message = (params.get("message") || "").trim();

        // Required fields.
        if (!name || !phone || !email || !service || !budget || !address) {
            return {
                statusCode: 400,
                body: "Missing required fields"
            };
        }

        // Validate email.
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return {
                statusCode: 400,
                body: "Invalid email"
            };
        }

        // Allow only recognized services.
        const allowedServices = [
            "Renovation",
            "Custom Cabinet",
            "Curtain",
            "Electrical & Plumbing",
            "Painting",
            "Others"
        ];

        if (!allowedServices.includes(service)) {
            return {
                statusCode: 400,
                body: "Invalid service"
            };
        }

        // Hidden environment variable containing the deployed /exec URL.
        const scriptURL = process.env.GOOGLE_SCRIPT_URL;

        if (!scriptURL) {
            throw new Error("GOOGLE_SCRIPT_URL is missing");
        }

        // Send only the fields expected by Apps Script.
        const googleParams = new URLSearchParams({
            name,
            phone,
            email,
            service,
            budget,
            address,
            message
        });

        console.log("Forwarding validated submission to Apps Script");

        const response = await fetch(scriptURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: googleParams.toString(),
            redirect: "follow"
        });

        const result = (await response.text()).trim();

        console.log("Apps Script HTTP status:", response.status);
        console.log("Apps Script reply:", result);

        if (!response.ok || result !== "Success") {
            console.error("Apps Script did not confirm saving:", result);

            return {
                statusCode: 502,
                headers: { "Content-Type": "text/plain" },
                body: "Google Sheets save failed. Please try again."
            };
        }

        return {
            statusCode: 200,
            headers: { "Content-Type": "text/plain" },
            body: "Success"
        };

    } catch (error) {
        console.error("Submission error:", error);

        return {
            statusCode: 500,
            headers: { "Content-Type": "text/plain" },
            body: "Submission failed"
        };
    }
};
