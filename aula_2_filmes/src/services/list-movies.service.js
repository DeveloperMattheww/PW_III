async function listMoviesService() {
    const movies = await movieRepository.list();
    return movies;
}

export { listMoviesService };