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

var egg_currently_playing = false;

var function_easter_eggs = [
    // == monster ==
    new FunctionEasterEgg("m,o,n,s,t,e,r", "Hey man, I'm gonna eat your girlfriend!", function() {
        if (egg_currently_playing === false) {
            egg_currently_playing = true;

            // setup shit
            var ov_img = document.createElement("img");
            var monster_img_path = "https://ayetsg.github.io/projects/monster/img/monster_idle.gif";
            var monster_audio = new Audio("https://ayetsg.github.io/files/monster_snippet.mp3");
            var overlay_div = document.createElement("div");

            overlay_div.style = "z-index: 2; position: absolute; top: 50%; left: 50%; text-align: center; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(75%, 75%);"

            overlay_div.id = "overlay";
            ov_img.src = monster_img_path;
            overlay_div.appendChild(ov_img);
            document.body.appendChild(overlay_div);

            // play the audio
            monster_audio.volume = 0.2;
            monster_audio.play();

            // when the audio ends, remove the overlay
            monster_audio.onended = function() {
                overlay_div.remove();
                egg_currently_playing = false;
            }
        }
    }),

    // == oaoooa ==
    new FunctionEasterEgg("o,a,o,o,o,a", "Bopeebo!", function() {
        if (egg_currently_playing === false) {
            egg_currently_playing = true;

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
                egg_currently_playing = false;
            }
        }
    }),

    // == ugh ==
    // (expand on this once week 7 assets are released, wanna do something similiar to the oaoooa)
    new FunctionEasterEgg("u,g,h", "Aw jeez 'Cap!", function() {
        if (egg_currently_playing === false) {
            egg_currently_playing = true;

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
                egg_currently_playing = false;
            }
        }
    }),

    // == sus ==
    new FunctionEasterEgg("s,u,s", "Who's the imposter?", function() {
        if (egg_currently_playing == false) {
            egg_currently_playing = true;
            var sus_audio = new Audio("https://ayetsg.github.io/files/SFX_AmongUs_Thud.mp3");

            sus_audio.volume = 0.2;
            sus_audio.play();

            sus_audio.onended = function() {
                egg_currently_playing = false;
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