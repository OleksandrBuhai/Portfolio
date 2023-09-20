
export const heroOptions = {
    autoPlay: true,

    fullScreen: {
        enable: false,
        zIndex: -1,
    },

    detectRetina: true,
    fpsLimit: 120,

    interactivity: {

        events: {
            onClick: {
                enable: false,
                mode: 'push',
            },
            onHover: {
                enable: true,
                mode: 'repulse',
            },
            resize: true,
        },
    },

    particles: {
        collisions: {
            enable: true,
            mode: "bounce",
        },
        color: {
            value: "#fff",
        },
        move: {
            angle: {
                offset: 0,
                value: 90,
            },
            center: {
                x: 50,
                y: 50,
                mode: "percent",
                radius: 0,
            },
            direction: ["top-left", "bottom-left", "bottom-right", "top-right"],
            drift: 0,
            enable: true,
            random: false,
            size: false,
            speed: 0.8,
            outMode: "bounce"
        },
        number: {
            limit: 0,
            value: 100,
        },

        opacity: {
            random: {
                enable: true,
                minimumValue: 0.4,
                maxValue: 0.6,
            },
            value: 0.6,
            animation: {
                count: 0,
                enable: true,
                speed: 0.2,
                decay: 0,
                sync: true,
                destroy: "none",
                startValue: "random",
            },
        },

        shape: {
            type: "character",
            character: [
                {
                    fill: true,
                    font: "Font Awesome 6 Brands",
                    style: "",
                    value: ["\uf13b"],
                    weight: "400",
                },
                {
                    fill: true,
                    font: "Font Awesome 6 Brands",
                    style: "",
                    value: ["\uf38b"],
                    weight: "400",
                },
                {
                    fill: true,
                    font: "Font Awesome 6 Brands",
                    style: "",
                    value: ["\uf3b9"],
                    weight: "400",
                },
                {
                    fill: true,
                    font: "Font Awesome 6 Brands",
                    style: "",
                    value: ["\uf41b"],
                    weight: "400",
                },
            ],
        },

        size: {
            random: {
                enable: true,
                minimumValue: 25,
                maxValue: 10,
            },
            animation: {
                count: 0,
                enable: true,
                speed: 0.2,
                decay: 0,
                sync: true,
                destroy: "none",
                startValue: "random",
            },
        },

        lineLinked: {
            blink: false,
            color: {
                value: "#ffffff",
            },
            consent: true,
            distance: 100,
            enable: true,
            frequency: 10,
            opacity: 0.4,
            width: 1,
        },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    smooth: true,
};


