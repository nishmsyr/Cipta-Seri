exports.handler = async function (event) {

    console.log("Netlify Function started");

    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            headers: {
                "Content-Type": "text/plain"
            },
            body: "Method Not Allowed"
        };
    }

    try {

        console.log("Received form data:", event.body);

        const scriptURL = process.env.GOOGLE_SCRIPT_URL;

        if (!scriptURL) {
            throw new Error("GOOGLE_SCRIPT_URL environment variable is missing.");
        }

        console.log("Sending data to Google Apps Script...");

        const response = await fetch(scriptURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: event.body
        });

        const result = await response.text();

        console.log("Google Apps Script response:", result);

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
            headers: {
                "Content-Type": "text/plain"
            },
            body: "Submission failed: " + error.message
        };
    }
};