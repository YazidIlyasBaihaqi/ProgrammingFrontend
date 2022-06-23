import Styles from "./Global.module.css"
import Description from "../GlobalDescription/Description"

function DataLabel(props) {
    const { data, title } = props

    return (
        <div className={Styles.container}>
            <h2 className={Styles.header}>{title}</h2>
            <h4 className={Styles.description}>Data Covid Berdasarkan {title}</h4>
            <div className={Styles.component}>
                {data.map((global) => {
                    return <Description data={global} />
                })}
            </div>
        </div>
    )
}

export default DataLabel;