var listaFilmes = [
    "https://m.media-amazon.com/images/M/MV5BZjZlZDlkYTktMmU1My00ZDBiLWFlNjEtYTBhNjVhOTM4ZjJjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BOTM5N2ZmZTMtNjlmOS00YzlkLTk3YjEtNTU1ZmQ5OTdhODZhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR1,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BZTJiNGM2NjItNDRiYy00ZjY0LTgwNTItZDBmZGRlODQ4YThkL2ltYWdlXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTUyNzkwMzAxOF5BMl5BanBnXkFtZTgwMzc1OTk1NjE@._V1_UX182_CR0,0,182,268_AL_.jpg"
]

var NomeFilmes = []
NomeFilmes.push("Donnie Darko", "V de vingança", `Clube dos cinco`, "Clube da luta", "Forrest Gump", "Matrix", `Doutor Estranho`, "Cisne Negro", "Fragmentado", "A Bruxa")

var linksTrailer = []
linksTrailer.push(
    "https://youtu.be/ZZyBaFYFySk",
    "https://youtu.be/E8XzibXYMWk",
    "https://youtu.be/EmqkaxOw6_o",
    "https://youtu.be/Fs0-4NLSO2Y",
    "https://youtu.be/bLvqoHBptjg",
    "https://youtu.be/2KnZac176Hs",
    "https://youtu.be/YUfWrIcX4zw",
    "https://youtu.be/t-weIgpXS6g",
    "https://youtu.be/7l4SzfMstLE",
    "https://youtu.be/FE-u6RznkGQ"
)

for (var i = 0; i < listaFilmes.length; i++) {
    document.write(
        "<div class='itens'>", "<a href=", linksTrailer[i], " target='_blank' >", `<img class='$ {(i == 5)?"poster":"poster"}' 
        src=${listaFilmes[i]}  >`, "<h2 class='nomes'>", NomeFilmes[i], "</h2>", "</a>", "</div>")
}