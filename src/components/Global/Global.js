import Styles from "./Global.module.css"
import Description from "../GlobalDescription/Description"

function Indonesia(props) {
    const { data } = props

    return (
        <div className={Styles.container}>
            <h2 className={Styles.header}>Indonesia</h2>
            <h4 className={Styles.description}>Data Covid Berdasarkan Global</h4>
            <div className={Styles.component}>
            {
                data.map((global) => {
                    return <Description data={global} />
                })
            }
            </div>
        </div>
    )
}

export default Indonesia;