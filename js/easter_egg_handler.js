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
    new FunctionEasterEgg("o,a,o,o,o,a", function() {
        var oaoooa_audio = new Audio("https://ayetsg.github.io/files/oaoooa.mp3");
        oaoooa_audio.play();
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
        func.exec();
    }).listen();
}

for (let redirect of redirect_easter_eggs) {
    egg_r.addCode(redirect.pattern, function() {
        window.location.replace(redirect.url);
    }).listen();
}