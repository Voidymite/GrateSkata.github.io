// html should be
// <li>[name] <a href="[twitter_url]" class="btn btn-xs btn-social-icon btn-twitter"><span class="fa fa-twitter"></span></a>

class YoutubeLink {
    constructor(url) {
        this.url = url;
    }
}

class TwitterLink {
    constructor(url) {
        this.url = url;
    }
}

class DXTeamMember {
    constructor(name, role, links) {
        this.name = name;
        this.role = role;
        this.links = links;
    }
}

_TEAM_MEMBERS = [
    // AetherDX
    new DXTeamMember(
        "AetherDX",
        "Founder",
        [
            new TwitterLink("https://twitter.com/AetherDX"),
            new YoutubeLink("https://youtube.com/channel/UCvDpWzh15Ad_bqh-_MfQbyw/")
        ]
    ),

    // AyeTSG
    new DXTeamMember(
        "AyeTSG",
        "Co-Director / Programmer",
        [
            new TwitterLink("https://twitter.com/AyeTSG"),
            new YoutubeLink("https://youtube.com/c/AyeTSG")
        ]
    ),

    // azereii
    new DXTeamMember(
        "azereii",
        "Artist",
        [
            new TwitterLink("https://twitter.com/azereii")
        ]
    ),

    // Cosmic Kira
    new DXTeamMember(
        "Cosmic Kira",
        "Director",
        [
            new TwitterLink("https://twitter.com/Kira_Supernova")
        ]
    ),
    
    // f3nnykins
    new DXTeamMember(
        "f3nnykins",
        "Artist",
        [
            new TwitterLink("https://twitter.com/f3nnykins")
        ]
    ),

    // hErShEYyUsh
    new DXTeamMember(
        "hErShEYyUsH",
        "Artist",
        []
    ),

    // Kallionic
    new DXTeamMember(
        "Kallionic",
        "Musician",
        [
            new TwitterLink("https://twitter.com/RisingRyota"),
            new YoutubeLink("https://youtube.com/c/Kallionic")
        ]
    ),

    // Kazolzen
    new DXTeamMember(
        "Kazolzen",
        "Artist",
        [
            new TwitterLink("https://twitter.com/KazoFox")
        ]
    ),

    // Matt$
    new DXTeamMember(
        "Matt$",
        "Musician",
        [
            new TwitterLink("https://twitter.com/matt_currency"),
            new YoutubeLink("https://youtube.com/c/Matt_Money")
        ]
    ),

    // Sadge
    new DXTeamMember(
        "Sadge",
        "Programmer",
        [
            new TwitterLink("https://twitter.com/intersadtional")
        ]
    ),

    // SodaReishii
    new DXTeamMember(
        "SodaReishii",
        "Artist",
        [
            new TwitterLink("https://twitter.com/SodaReishii"),
            new YoutubeLink("https://youtube.com/channel/UC7RJ4CwpN9_tQhqcpXTZFfw")
        ]
    ),
    
    // TokyoGalaxy
    new DXTeamMember(
        "TokyoGalaxy",
        "Artist",
        [
            new TwitterLink("https://twitter.com/TokyoGalaxyOG")
        ]
    ),

    // vomic
    new DXTeamMember(
        "vomic",
        "Artist",
        [
            new TwitterLink("https://twitter.com/theawesomefart")
        ]
    )
]