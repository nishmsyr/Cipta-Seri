exports.handler = async function (event) {

    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: "Method Not Allowed"
        };
    }

    try {

        const params = new URLSearchParams(event.body || "");

        // Honeypot
        const honeypot = params.get("website");

        if (honeypot) {
            console.log("Spam blocked by honeypot");

            return {
                statusCode: 200,
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

        // Required fields
        if (!name || !phone || !email || !service || !budget || !address) {
            return {
                statusCode: 400,
                body: "Missing required fields"
            };
        }

        // Basic email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return {
                statusCode: 400,
                body: "Invalid email"
            };
        }

        // Only allow your actual services
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

        const scriptURL = process.env.GOOGLE_SCRIPT_URL;

        if (!scriptURL) {
            throw new Error("GOOGLE_SCRIPT_URL is missing");
        }

        const response = await fetch(scriptURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: event.body
        });

        const result = await response.text();

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "text/plain"
            },
            body: result
        };

    } catch (error) {

        console.error("Function error:", error);

        return {
            statusCode: 500,
            body: "Submission failed"
        };
    }
};