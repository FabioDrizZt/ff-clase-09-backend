const movieService = require('../services/movieService.js')

const movieController = {
  getMovies: async (req, res, next) => {
    const { genre } = req.query
    try {
      const movies = await movieService.getMovies(genre)
      return (movies.length === 0)
        ? res.status(404).json({ message: 'No se encontraron peliculas' })
        : res.status(200).json(movies)
    } catch (error) {
      next(error)
    }
  },
  getMovieById: async (req, res, next) => {
    const { id } = req.params
    try {
      const movie = await movieService.getMovieById(id)
      return (!movie)
        ? res.status(404).json({ message: 'No se encontro la pelicula' })
        : res.status(200).json(movie)
    } catch (error) {
      next(error)
    }
  },
  getMoviesByDirector: async (req, res, next) => {
    const { director } = req.params
    try {
      const movies = await movieService.getMoviesByDirector(director)
      return (movies.length === 0)
        ? res.status(404).json({ message: 'No se encontraron peliculas' })
        : res.status(200).json(movies)
    } catch (error) {
      next(error)
    }
  },
  createMovie: async (req, res, next) => {
    try {
      const insertedMovie = await movieService.createMovie(req.body);
      res.status(201).json(insertedMovie);
    } catch (error) {
      next(error)
    }
  },
  deleteMovie: async (req, res, next) => {
    const { id } = req.params
    try {
      const deletedMovie = await movieService.deleteMovie(id);
      res.status(200).json({ message: 'Movie deleted', deletedMovie });
    } catch (error) {
      next(error)
    }
  },
  updateMovie: async (req, res, next) => {
    const { id } = req.params
    try {
      const updatedMovie = await movieService.updateMovie(id, req.body);
      if (!updatedMovie) {
        res.status(404).json({ message: 'Movie not found' });
      } else {
        res.status(200).json({ message: 'Movie updated', updatedMovie });
      }
    } catch (error) {
      next(error)
    }
  }
}
module.exports = movieController