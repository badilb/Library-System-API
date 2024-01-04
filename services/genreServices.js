const genreValidate = require("../validate/genreValidate");
let genres = [];
let ID = 0;


exports.getGenre = (name_param, limit_param) => {
    let filtered_genres = genres;

    if (typeof name_param !== 'undefined') {
        filtered_genres = filtered_genres.filter(genre => genre.name === name_param);
    }

    filtered_genres = filtered_genres.slice(0, limit_param);

    return filtered_genres;
}


exports.addGenre = (genre_body) => {
    const {valid, message} = genreValidate.validate(genre_body);

    if (!valid) {
        return message;
    }

    genre_body.id = ID++;
    genre.push(genre_body);
    return message;
}

exports.updateGenre = (genreId, updatedGenre) => {
    let genreIndex = genres.findIndex(genre => genre.id === parseInt(genreId));
    if (genreIndex !== -1) {
        genre[genreIndex] = { ...genre[genreIndex], ...updatedGenre };
        return "The genre is updated";
    }
    return "The genre does not exist";
}

exports.deleteGenre = (genreId) => {
    const index = genres.findIndex(genre.id === parseInt(Id));
    if (index !== -1) {
        genres.splice(index, 1);
        return "Genre is deleted";
    }
    return "Genre is not found";
}