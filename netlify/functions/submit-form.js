exports.handler = async function (event) {

    console.log("Netlify Function started");

    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: "Method Not Allowed"
        };
    }

    try {

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

        console.log("Google Apps Script response:", result);

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "text/plain"
            },
            body: result
        };

    } catch (error) {

        console.error(error);

        return {
            statusCode: 500,
            body: "Submission failed: " + error.message
        };
    }
};