import { CardLabelStyle } from "./usage-card.styles";
const CardLabel = ({ label, used, total }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <CardLabelStyle>{label}</CardLabelStyle>
            <CardLabelStyle>{used} of {total} used</CardLabelStyle>
        </div>
    )
}

export default CardLabel;