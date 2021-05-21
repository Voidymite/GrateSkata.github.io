class Fursona {
    constructor(bio, art_pieces, id) {
        this.bio = bio;
        this.art_pieces = art_pieces;
        this.id = id;
    }
}

class FursonaBio {
    constructor(name, gender, age, occupation, backstory) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.occupation = occupation;
        this.backstory = backstory;
    }
}

class ArtPiece {
    constructor(img_url, bio, artist) {
        this.img_url = img_url;
        this.bio = bio;
        this.artist = artist;
    }
}

_FURSONAS = [
    // Quinton
    new Fursona(
        new FursonaBio(
            "Quinton John Chervalsky",
            "Male",
            "22",
            "Programming",
            "Quinton was born in the year of 4693, in the city of Teronimo, New Russia. A freak accident with a newly invented time machine by Dr. Sylvan had sent Quinton back to the year 2011 when he was 12 years old, and he has been living in real-time since."
        ),
        [
            // TBD: Art Pieces
        ],
        "quinton"
    )
]