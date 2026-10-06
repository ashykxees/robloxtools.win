const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve the existing website files
app.use(express.static(__dirname));

app.post("/api/demo-submit", async (req, res) => {
    try {
        const text =
            typeof req.body?.text === "string"
                ? req.body.text.trim()
                : "";

        if (!text) {
            return res.status(400).json({
                success: false,
                error: "No text submitted"
            });
        }

        if (text.length > 5000) {
            return res.status(400).json({
                success: false,
                error: "Text is too long"
            });
        }

        const webhook = process.env.DISCORD_WEBHOOK_URL;

        if (!webhook) {
            console.error("DISCORD_WEBHOOK_URL is not configured");

            return res.status(500).json({
                success: false,
                error: "Server configuration error"
            });
        }

        const discordResponse = await fetch(webhook, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: "BloxLab Demo",
                embeds: [
                    {
                        title: "Following Tool Submission",
                        description: text.slice(0, 4096),
                        color: 0x5865F2,
                        footer: {
                            text: "BloxLab Following Tool"
                        },
                        timestamp: new Date().toISOString()
                    }
                ]
            })
        });

        if (!discordResponse.ok) {
            const errorText = await discordResponse.text();

            console.error(
                "Discord webhook failed:",
                discordResponse.status,
                errorText
            );

            return res.status(502).json({
                success: false,
                error: "Discord submission failed"
            });
        }

        console.log("Demo submission sent to Discord successfully");

        return res.json({
            success: true
        });

    } catch (error) {
        console.error("Submission error:", error);

        return res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on port ${PORT}`);
});
