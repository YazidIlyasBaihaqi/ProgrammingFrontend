import Styles from "./Description.module.css"

function ProvinceDesc(props) {
  const { provinces } = props;

  return (
    <tr>
      <td className={Styles.items}>{provinces.kota}</td>
      <td className={Styles.items}>{provinces.kasus}</td>
      <td className={Styles.items}>{provinces.sembuh}</td>
      <td className={Styles.items}>{provinces.dirawat}</td>
      <td className={Styles.items}>{provinces.meninggal}</td>
    </tr>
  );
}

export default ProvinceDesc;
