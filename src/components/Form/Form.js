import Styles from "./Form.module.css";
import { useState } from "react";
import Alert from "../Alert/Alert.js";
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { updateProvince } from "../../Features/ProvincesSlices";

function Form() {
  const { provinces } = useSelector((state) => state.provinces.provinces)

  const dispatch = useDispatch();
  const navigation = useNavigate()
  const [provinsi, setprovinsi] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [update, setUpdate] = useState("");

  const [isprovinsiError, setIsprovinsiEror] = useState(false);
  const [isUpdateError, setIsUpdateError] = useState(false);
  const [isJumlahError, setIsJumlahError] = useState(false);

  function handleProvinsi(e) {
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
      console.log(provinsi);
      const province = {
        kota: provinsi,
        kasus: update === "kasus" ? jumlah : provinces.find(e => e.kota === provinsi).kasus,
        sembuh: update === "sembuh" ? jumlah : provinces.find(e => e.kota === provinsi).sembuh,
        dirawat: update === "dirawat" ? jumlah : provinces.find(e => e.kota === provinsi).dirawat,
        meninggal: update === "meninggal" ? jumlah : provinces.find(e => e.kota === provinsi).meninggal,
      };
      dispatch(updateProvince(province))
      navigation("/covid/provinsi")

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
          <select className={Styles.form_input} onChange={handleProvinsi}>
            <option value='value' disabled selected>
              Pilih Kota
            </option>
            {provinces.map((province) => {
              return <option value={province.kota}>{province.kota}</option>;
            })}
          </select>
          {isprovinsiError && <Alert>Provinsi Wajib Diisi</Alert>}
          <label className={Styles.label}>Status</label>
          <select className={Styles.form_input} onChange={handleUpdate}>
            <option value="value" disabled selected>
              Pilih kasus
            </option>
            <option value="kasus">kasus</option>
            <option value="sembuh">sembuh</option>
            <option value="meninggal">meninggal</option>
            <option value="dirawat">dirawat</option>
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
