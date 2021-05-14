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

// list of team members
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

    // Celeste
    new DXTeamMember(
        "Celeste",
        "Musician",
        [
            new TwitterLink("https://twitter.com/PansexualPlanet"),
            new YoutubeLink("https://youtube.com/channel/UCm3eGs2etEOMzRX0iQ4QzqQ")
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
    
    // The Unnamed Player
    new DXTeamMember(
        "The Unnamed Player",
        "Musician",
        [
            new YoutubeLink("https://youtube.com/channel/UCevm42QSRJ40i_mvlzzIyGg")
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
    ),

    // Zeexel
    new DXTeamMember(
        "Zeexel",
        "Programmer",
        [
            new TwitterLink("https://twitter.com/Zeexel32"),
            new YoutubeLink("https://youtube.com/channel/UCOlgsvCe396K5E9NjfpRLuQ")
        ]
    )
]

// insert team member into list on main page
function insertTeamMemberIntoList(member)
{
    // html should be
    // <li>[name] <a href="[twitter_url]" class="btn btn-xs btn-social-icon btn-twitter"><span class="fa fa-twitter"></span></a>

    member = _TEAM_MEMBERS[member];

    var list_item = document.createElement("li");
    list_item.innerHTML = member.name + " ";

    if (member.links.length != 0) {
        for (link in member.links) {
            link = member.links[link];

            if (link.constructor.name == "YoutubeLink") {
                // yt link behavior
                var yt_url = document.createElement("a");
                yt_url.href = link.url;
                yt_url.classList.add("btn", "btn-xs", "btn-social-icon", "btn-pinterest");
                
                var yt_logo = document.createElement("span");
                yt_logo.classList.add("fa", "fa-youtube");

                yt_url.appendChild(yt_logo);

                list_item.innerHTML = list_item.innerHTML + yt_url.outerHTML;
            } else if (link.constructor.name == "TwitterLink") {
                // twitter link behavior
                var twt_url = document.createElement("a");
                twt_url.href = link.url;
                twt_url.classList.add("btn", "btn-xs", "btn-social-icon", "btn-twitter");
                
                var twt_logo = document.createElement("span");
                twt_logo.classList.add("fa", "fa-twitter");

                twt_url.appendChild(twt_logo);

                list_item.innerHTML = list_item.innerHTML + twt_url.outerHTML;
            }
        } 
    }

    list_item.innerHTML = list_item.innerHTML + " (" + member.role + ")"; 

    document.getElementById("team_list").appendChild(list_item);
}

// document setup
function setupDocument()
{
    for (member in _TEAM_MEMBERS) {
        insertTeamMemberIntoList(member);
    }
}

window.addEventListener("load", function() {
    setupDocument();
});