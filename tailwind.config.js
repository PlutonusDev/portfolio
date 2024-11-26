module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    darkMode: "class",
    theme: {
        extend: {
            animation: {
                "gradient-xy": "gradient-xy 8s ease infinite",
                "marquee": "marquee 40s linear infinite",
            },
            keyframes: {
                "gradient-xy": {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "center top"
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "center bottom"
                    }
                },
                "marquee": {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(-200%)" },
                }
            },
            colors: {
                "dark": "#090909",
                "kindadark": "#262626",
                "notsodark": "#cdcdcd"
            },
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}