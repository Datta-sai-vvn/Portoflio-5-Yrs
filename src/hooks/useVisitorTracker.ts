import { useEffect, useRef } from 'react';

const useVisitorTracker = () => {
    const initialized = useRef(false);

    useEffect(() => {
        // Prevent double-firing in React Strict Mode
        if (initialized.current) return;
        initialized.current = true;

        const notifyVisitor = async () => {
            // Check if we already notified for this session
            const sessionKey = 'visitor_notified_v1';
            if (sessionStorage.getItem(sessionKey)) return;

            try {
                // 1. Get IP and Location Data
                const ipResponse = await fetch('https://ipapi.co/json/');
                if (!ipResponse.ok) throw new Error('Failed to fetch IP data');
                const data = await ipResponse.json();

                // 2. Prepare the Discord Message
                const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;
                if (!webhookUrl) {
                    console.error('Discord Webhook URL is missing');
                    return;
                }

                const timestamp = new Date().toLocaleString();
                const deviceType = /Mobile|Android|iP(hone|od)/i.test(navigator.userAgent) ? '📱 Mobile' : '💻 Desktop';


                const message = {
                    embeds: [{
                        title: "🚀 New Portfolio Visitor!",
                        color: 0xFF6B35, // Primary Orange Brand Color
                        description: `**Location:** ${data.city}, ${data.region}, ${data.country_name}\n**Network:** ${data.org}\n**Device:** ${deviceType}\n**Time:** ${timestamp}`,
                        footer: {
                            text: "Visitor Tracker System"
                        },
                        timestamp: new Date().toISOString()
                    }]
                };

                // 3. Send to Discord
                await fetch(webhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(message)
                });

                // Mark session as notified
                sessionStorage.setItem(sessionKey, 'true');

            } catch (error) {
                console.error('Error tracking visitor:', error);
            }
        };

        notifyVisitor();
    }, []);
};

export default useVisitorTracker;
