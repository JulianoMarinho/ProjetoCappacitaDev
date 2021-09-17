import axios from "axios";

// PAGINA INICIAL

//popular
export const index = async (req, res) => {
  //envia a categoria para o html
  let category = "Os Mais Populares";
  //porta cadastrada no .env
  let port = process.env.PORT;
  try {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
    );
    //passa o results para o data
    data = data.results;
    //tratar status code
    if (data == undefined) {
      return res.status(400).json({ error: "Requisição Inválida" });
    } else {
      return res.status(200).render("pages/home", { data, port, category });
    }
  } catch (error) {
    console.error(error);
  }
};

//top_rated
export const top_rated = async (req, res) => {
  //envia a categoria para o html
  let category = "Os Mais Votados";
  //porta cadastrada no .env
  let port = process.env.PORT;
  try {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`
    );

    data = data.results;
    //tratar status code
    if (data == undefined) {
      return res.status(400).json({ error: "Requisição Inválida" });
    } else {
      return res.status(200).render("pages/home", { data, port, category });
    }
  } catch (error) {
    console.error(error);
  }
};
//upcoming
export const upcoming = async (req, res) => {
  //envia a categoria para o html
  let category = "Em Breve";
  //porta cadastrada no .env
  let port = process.env.PORT;
  try {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}`
    );

    data = data.results;
    //tratar status code
    if (data == undefined) {
      return res.status(400).json({ error: "Requisição Inválida" });
    } else {
      return res.status(200).render("pages/home", { data, port, category });
    }
  } catch (error) {
    console.error(error);
  }
};
//now_playing
export const now_playing = async (req, res) => {
  //envia a categoria para o html
  let category = "Em Cartaz";
  //porta cadastrada no .env
  let port = process.env.PORT;
  try {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}`
    );

    data = data.results;
    //tratar status code
    if (data == undefined) {
      return res.status(400).json({ error: "Requisição Inválida" });
    } else {
      return res.status(200).render("pages/home", { data, port, category });
    }
  } catch (error) {
    console.error(error);
  }
};

//buscar filmes por nome
export const search = async (req, res) => {
  //envia a categoria para o html
  let category = "Resultados da Pesquisa";
  //porta cadastrada no .env
  let port = process.env.PORT;
  //pega o valor digitado no campo search
  let search = req.body.search;

  //se o usuario digitar algo no search, ele vai fazer a requisicao
  if (search) {
    try {
      //response é a resposta do axios Mas aqui é retirado o data de dentro
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${search}`
      );

      //salva o results dentro do data
      data = data.results;
      //tratar status code
      if (data == undefined) {
        return res.status(400).json({ error: "Requisição Inválida" });
      } else {
        return res.status(200).render("pages/home", { data, port, category });
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    //caso o usuario n digite nada e clique no search, ele vai redirecionar para a home
    return res.redirect("/");
  }
};

//mostrar detalhes do filme
export const detail = async (req, res) => {
  //envia a categoria para o html
  let category = "Detalhes do Filme Selecionado";
  //porta cadastrada no .env
  let port = process.env.PORT;
  //id obtido ao clicar em detalhes
  let id = req.params.id;

  try {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
    );
    if (data == undefined) {
      return res.status(400).json({ error: "Requisição Inválida" });
    } else {
      return res.status(200).render("pages/detail", { data, port, category });
    }
  } catch (error) {
    console.log(error);
  }
};
