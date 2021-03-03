class RedirectEasterEgg {
    constructor(pattern, url) {
        this.pattern = pattern;
        this.url = url;
    }
};

var redirect_easter_eggs = [
    new RedirectEasterEgg("m,c,r,i,b", "https://twitter.com/PointyyESM/status/1364715306611073032")
]

var egg = new Egg();

for (let redirect of redirect_easter_eggs) {
    egg.addCode(redirect.pattern, function() {
        window.location.replace(redirect.url);
    }).listen();
}