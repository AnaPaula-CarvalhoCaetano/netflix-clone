const API_KEY = "70cbb8fb77c9a05f545ac7045c66779e";

const categories = [
    {
        name: "trending",
        title: "Em alta",
        path:  `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
        isLarge: true,

    },

    {
        name: "netflixOriginals",
        title: "Originais Netflix",
        path:  `/discover/tv?api_key=${API_KEY}&with_networks=213`,
        isLarge: false,

    },

    {
        name: "topRated",
        title: "Populares",
        path:  `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
        isLarge: false,

    },

    {
        name: "comedy",
        title: "Comédias",
        path:  `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
        isLarge: false,

    },

    {
        name: "romances",
        title: "Romances",
        path:  `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
        isLarge: false,

    },

    {
        name: "horror",
        title: "Terror",
        path:  `/discover/movie?api_key=${API_KEY}&with_genres=27`,
        isLarge: false,
        

    },


    {
        name: "thriller",
        title: "Suspense",
        path:  `/discover/movie?api_key=${API_KEY}&with_genres=53`,
        isLarge: false,

    },


    {
        name: "scienceFiction",
        title: "Ficção Científica",
        path: `/discover/movie?api_key=${API_KEY}&with_genres=878&language=pt-BR`,
        isLarge: false,
    },

    

    {
        name: "superheroes",
        title: "Super-heróis",
        path: `/discover/movie?api_key=${API_KEY}&with_genres=12&language=pt-BR`,
        isLarge: false,
    },

    {
        name: "actionAdventure",
        title: "Ação e Aventura",
        path: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=pt-BR`,
        isLarge: false,
    },

    {
        name: "mystery",
        title: "Mistério",
        path: `/discover/movie?api_key=${API_KEY}&with_genres=9648&language=pt-BR`,
        isLarge: false,
    },
    

    {
        name: "family",
        title: "Família",
        path: `/discover/movie?api_key=${API_KEY}&with_genres=10751&language=pt-BR`,
        isLarge: false,
    },

    {
        name: "cartoons", 
        title: "Desenhos",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=16&language=pt-BR`,
        isLarge: false,
    },



    {
        name: "animation",
        title: "Animação",
        path: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=pt-BR`,
        isLarge: false,
    },

    {
        name: "musicals",
        title: "Musicais",
        path: `/discover/movie?api_key=${API_KEY}&with_genres=10402&language=pt-BR`,
        isLarge: false,
    }, 

    {
        name: "fantasy",
        title: "Fantasia",
        path: `/discover/movie?api_key=${API_KEY}&with_genres=14&language=pt-BR`,
        isLarge: false,
    },
    
    {
        name: "series",
        title: "Séries",
        path:  `/discover/tv?api_key=${API_KEY}&with_genres=18`,
        isLarge: false,

    },

    {
        name: "documentaries",
        title: "Documentários",
        path:  `/discover/tv?api_key=${API_KEY}&with_genres=99`,
        isLarge: false,

    },

    {
        name: "novelas",
        title: "Novelas",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=10766&language=pt-BR`,
        isLarge: false,
    },

]

export const getMovies = async (path) => {
    try {
        let url = `https://api.themoviedb.org/3${path}`;
        const response = await fetch(url);
        return await response.json();

    } catch (error) {
        console.log("error getMovies: ", error);
    }
};

export default categories;