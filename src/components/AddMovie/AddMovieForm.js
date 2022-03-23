import styles from "./AddMovieForm.module.css";

function AddMovie() {
  return (
    <div className={styles.container}>
      <div>
        <img src="https://picsum.photos/250" alt="" className={styles.image} />
      </div>
      <div>
        <form action="" className={styles.form}>
          <h3 className={styles.form__title}>Add Movie</h3>
          <label htmlFor="" className={styles.form__control}>
            Title
          </label>
          <input type="text" className={styles.form__input} />
          <label htmlFor="" className={styles.form__control}>
            Year
          </label>
          <input type="text" className={styles.form__input} />
          <input type="submit" className={styles.form__submit} value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default AddMovie;
