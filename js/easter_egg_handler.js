class RedirectEasterEgg {
    constructor(pattern, url) {
        this.pattern = pattern;
        this.url = url;
    }
};

class FunctionEasterEgg{
    constructor(pattern, func) {
        this.pattern = pattern;
        this.func = func;
    }

    exec() {
        this.func();
    }
};

var function_easter_eggs = [
    // == oaoooa ==
    new FunctionEasterEgg("o,a,o,o,o,a", function() {
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
        }
    })
]

var redirect_easter_eggs = [
    new RedirectEasterEgg("c,r,o,u,t,o,n", "https://crouton.net"),
    new RedirectEasterEgg("m,c,r,i,b", "https://twitter.com/PointyyESM/status/1364715306611073032"),
    new RedirectEasterEgg("m,r,b,u,r,n,s", "https://www.youtube.com/watch?v=RtJ9YB-wTqw"),
    new RedirectEasterEgg("s,e,n,p,a,i", "https://ayetsg.github.io/files/senpai_is_real.mp4"),
    new RedirectEasterEgg("s,u,s", "https://whentheimposteriss.us")
]

var egg_f = new Egg();
var egg_r = new Egg();

for (let func of function_easter_eggs) {
    egg_f.addCode(func.pattern, function() {
        console.log("EasterEggHandler: Executing " + func.pattern);

        func.exec();
    }).listen();
}

for (let redirect of redirect_easter_eggs) {
    egg_r.addCode(redirect.pattern, function() {
        window.location.replace(redirect.url);
    }).listen();
}