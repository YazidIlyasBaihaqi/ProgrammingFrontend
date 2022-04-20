import Styles from "./Form.module.css";
import { useState } from "react";
import Alert from "../Alert/Alert.js";

function Form(props) {
  const { provinces, updateProvinces } = props;

  const [provinsi, setprovinsi] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [update, setUpdate] = useState("");

  const [isprovinsiError, setIsprovinsiEror] = useState(false);
  const [isUpdateError, setIsUpdateError] = useState(false);
  const [isJumlahError, setIsJumlahError] = useState(false);

  function handleprovinsi(e) {
    setprovinsi(e.target.value);
  }

  function handleJumlah(e) {
    setJumlah(e.target.value);
  }

  function handleUpdate(e) {
    setUpdate(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (provinsi === "") {
      setIsprovinsiEror(true);
    } else if (update === "") {
      setIsUpdateError(true);
    } else if (jumlah === "") {
      setIsJumlahError(true);
    } else {
      let province = {
        kota: provinsi,
        kasus: 0,
        sembuh: 0,
        meninggal: 0,
        dirawat: 0,
      };
      province[update] = jumlah;

      updateProvinces([...provinces, province]);
      setIsprovinsiEror(false);
      setIsUpdateError(false);
      setIsJumlahError(false);
    }
  }

  return (
    <div className={Styles.container}>
      <section className={Styles.form}>
        <div className={Styles.image}>
          <img
            className={Styles.form_image}
            src="https://picsum.photos/536/354"
            alt="placeholder"
          />
        </div>
        <form className={Styles.input} action="" onSubmit={handleSubmit}>
          <h2 className={Styles.head}>Form Covid</h2>
          <label className={Styles.label}>Provinsi</label>
          <select className={Styles.form_input} onChange={handleprovinsi}>
            {provinces.map((province) => {
              return <option value={province.kota}>{province.kota}</option>;
            })}
          </select>
          {isprovinsiError && <Alert>Provinsi Wajib Diisi</Alert>}
          <label className={Styles.label}>Status</label>
          <select className={Styles.form_input} onChange={handleUpdate}>
            <option value="kasus">Kasus</option>
            <option value="sembuh">Sembuh</option>
            <option value="meninggal">Meninggal</option>
            <option value="dirawat">Dirawat</option>
          </select>
          {isUpdateError && <Alert>Status Wajib Diisi</Alert>}
          <label className={Styles.label}>Jumlah</label>
          <input
            type="number"
            className={Styles.form_input}
            onChange={handleJumlah}
          />
          {isJumlahError && <Alert>Jumlah Wajib Diisi</Alert>}
          <input type="submit" value="Submit" className={Styles.button} />
        </form>
      </section>
    </div>
  );
}

export default Form;
