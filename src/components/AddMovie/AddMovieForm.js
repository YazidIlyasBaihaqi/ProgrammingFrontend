import styles from "./AddMovieForm.module.css";
import { useState } from "react";
import {nanoid} from "nanoid";
import Alert from "../Alert/Alert";

function AddMovie(props) {
  const { movies, setMovies } = props

  const [title, setTitle] = useState("");

  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  function handleTitle(e){
    setTitle(e.target.value)
  }

  const [date, setDate] = useState("");
  function handleDate(e){
    setDate(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();

    if (title === ""){
      setIsTitleError(true)
    } else if (date === ""){
      setIsDateError(true)
    } else {
      const movie = {
        id: nanoid(), title: title,
        year: date, type: "Movie",
        poster: "https://picsum.photos/300/400"
      }
      setMovies([...movies, movie]);
    }
    setIsTitleError(false)
    setIsDateError(false);
  }

  return (
    <div className={styles.container}>
      <div>
        <img src="https://picsum.photos/250" alt="" className={styles.image} />
      </div>
      <div>
        <form action="" className={styles.form} onSubmit={handleSubmit}>
          <h3 className={styles.form__title}>Add Movie</h3>
          <label htmlFor="" className={styles.form__control}>
            Title
          </label>
          <input type="text" value={title} id="title" className={styles.form__input} onChange={handleTitle} />
          {isTitleError&& <Alert>Title Wajib Diisi</Alert>}
          <label htmlFor="" className={styles.form__control}>
            Year
          </label>
          <input id="date" type="text" value={date} className={styles.form__input} onChange={handleDate} />
          {isDateError && <Alert>Date Wajib Diisi</Alert>}
          <input type="submit" className={styles.form__submit} value="Submit" />
        </form>
      </div>
    </div>
  );
}


export default AddMovie;
