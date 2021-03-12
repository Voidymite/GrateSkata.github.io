class FunctionEasterEgg{
    constructor(pattern, description, func) {
        this.pattern = pattern;
        this.func = func;
        this.unlocked = false;

        this.description = description;

        this.friendlyPattern = "egg_" + this.pattern.replaceAll(",", "");
    }

    exec() {
        this.setUnlocked(true);
        this.func();
    }

    setDescription(desc) {
        this.description = desc;
    }

    setUnlocked(status) {
        this.unlocked = status;

        localStorage.setItem(this.friendlyPattern, this.unlocked);
    }
};

var overlay_active = false;

var function_easter_eggs = [
    // == believe ==
    new FunctionEasterEgg("b,e,l,i,e,v,e", "I needed to believe!", function() {
        window.location.replace("https://www.youtube.com/watch?v=7f2wg1pqQDs");
    }),

    // == crouton ==
    new FunctionEasterEgg("c,r,o,u,t,o,n", "Have a crouton!", function() {
        window.location.replace("https://crouton.net");
    }),

    // == mcrib ==
    new FunctionEasterEgg("m,c,r,i,b", "Do you like the McRib?", function() {
        window.location.replace("https://twitter.com/PointyyESM/status/1364715306611073032");
    }),

    // == mrburns ==
    new FunctionEasterEgg("m,r,b,u,r,n,s", "MR BURNS!! AUGH!!", function() {
        window.location.replace("https://www.youtube.com/watch?v=RtJ9YB-wTqw");
    }),

    // == oaoooa ==
    new FunctionEasterEgg("o,a,o,o,o,a", "Bopeebo!", function() {
        if (overlay_active === false) {
            overlay_active = true;

            // setup shit
            var ov_img = document.createElement("img");
            var boyfriend_img_path = "https://ayetsg.github.io/img/boyfriend.png";
            var dad_img_path = "https://ayetsg.github.io/img/dad.png";
            var oaoooa_dad_audio = new Audio("https://ayetsg.github.io/files/oaoooa_dad.mp3");
            var oaoooa_bf_audio = new Audio("https://ayetsg.github.io/files/oaoooa_bf.mp3");
            var overlay_div = document.createElement("div");
            var bf_active = false;

            overlay_div.style = "z-index: 2; position: absolute; top: 50%; left: 50%; text-align: center; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(75%, 75%);"

            overlay_div.id = "overlay";
            ov_img.src = dad_img_path;
            overlay_div.appendChild(ov_img);
            document.body.appendChild(overlay_div);

            // play the audio
            oaoooa_dad_audio.volume = 0.2;
            oaoooa_bf_audio.volume = 0.2;
            oaoooa_dad_audio.play();

            // when the audio ends, remove the overlay
            oaoooa_dad_audio.onended = function() {
                ov_img.src = boyfriend_img_path;
                bf_active = true;
                
                oaoooa_bf_audio.play();
            }

            oaoooa_bf_audio.onended = function() {
                overlay_div.remove();
                overlay_active = false;
            }
        }
    }),

    // == senpai ==
    new FunctionEasterEgg("s,e,n,p,a,i", "Holy shit, he's real!", function() {
        window.location.replace("https://ayetsg.github.io/files/senpai_is_real.mp4");
    }),

    // == sus ==
    new FunctionEasterEgg("s,u,s", "When the imposter is sus!", function() {
        window.location.replace("https://whentheimposteriss.us");
    }),

    // == ugh ==
    // (expand on this once week 7 assets are released, wanna do something similiar to the oaoooa)
    new FunctionEasterEgg("u,g,h", "Aw jeez 'Cap!", function() {
        if (overlay_active === false) {
            overlay_active = true;

            // setup shit
            var ov_img = document.createElement("img");
            var tankman_img_path = "https://ayetsg.github.io/img/tankman.png";
            var ugh_audio = new Audio("https://ayetsg.github.io/files/ugh_snippet.mp3");
            var overlay_div = document.createElement("div");

            overlay_div.style = "z-index: 2; position: absolute; top: 50%; left: 50%; text-align: center; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(75%, 75%);"

            overlay_div.id = "overlay";
            ov_img.src = tankman_img_path;
            overlay_div.appendChild(ov_img);
            document.body.appendChild(overlay_div);

            // play the audio
            ugh_audio.volume = 0.2;
            ugh_audio.play();

            // when the audio ends, remove the overlay
            ugh_audio.onended = function() {
                overlay_div.remove();
                overlay_active = false;
            }
        }
    })
]

var egg_f = new Egg();
for (let func of function_easter_eggs) {
    egg_f.addCode(func.pattern, function() {
        console.log("EasterEggHandler: Executing " + func.friendlyPattern);

        func.exec();
    }).listen();
}