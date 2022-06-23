import Style from "./Description.module.css";

function Description(props) {
  const { data } = props;

  return (
    <div className={Style.container}>
      <h2 className={Style.status}>{data.status}</h2>
      <h1 className={Style.total}>{data.value}</h1>
    </div>
  );
}

export default Description;
