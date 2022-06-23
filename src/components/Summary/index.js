import StyledSummary from "./Summary.styled";


function Summary(props) {
    const { img, title } = props

    return (
        <StyledSummary>
            <h2>Summary</h2>
            <h3>Summary dari {title}</h3>
            <img src={img} alt={title} />
        </StyledSummary>
    )
}

export default Summary;