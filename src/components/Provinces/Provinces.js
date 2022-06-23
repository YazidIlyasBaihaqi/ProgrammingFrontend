import ProvinceDesc from "../ProvincesDesc/Description";
import Styles from "./Provinces.module.css";
import { useSelector } from "react-redux"

function Provinces() {
  const { provinces } = useSelector((state) => state.provinces.provinces)
  console.log(provinces)
  return (
    <div className={Styles.container}>
      <h2 className={Styles.header}>Provinsi Indonesia</h2>
      <h4 className={Styles.description}>Data Covid Berdasarkan Provinsi</h4>
      <div className={Styles.component}>
        <table className={Styles.table}>
          <tr>
            <th className={Styles.head}>Provinsi</th>
            <th className={Styles.head}>Positif</th>
            <th className={Styles.head}>Sembuh</th>
            <th className={Styles.head}>Dirawat</th>
            <th className={Styles.head}>Meninggal</th>
          </tr>
          <tbody>
            {provinces.map((provinces) => {
              return <ProvinceDesc provinces={provinces} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Provinces;
