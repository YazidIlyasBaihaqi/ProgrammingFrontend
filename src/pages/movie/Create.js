import AddMovie from "../../components/AddMovie/AddMovieForm";

function CreateMovie ({movies, setMovies}){
    return (
        <>
            <h2>Create Movie</h2>
            <AddMovie movies={movies} setMovies={setMovies} />
        </>
    )
}

export default CreateMovie;