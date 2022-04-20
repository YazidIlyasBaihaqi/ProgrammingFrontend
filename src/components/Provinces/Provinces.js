import ProvinceDesc from "../ProvincesDesc/Description";
import Styles from "./Provinces.module.css";

function Provinces(props) {
  const { provinces, updateProvinces } = props;

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
          {provinces.map((provinces) => {
            return <ProvinceDesc provinces={provinces} />;
          })}
        </table>
      </div>
    </div>
  );
}

export default Provinces;
