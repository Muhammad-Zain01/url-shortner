
import { VerificationInputBox } from "./verification-input.styles";
import { isNumeric } from "../../utils/helper";
const VerificationInput = ({ code, setCode, handleVerify}) => {
    const handleChange = (event) => {
        event.preventDefault();
        const id = event.target.id;
        let value = event.key;
        let keyCode = [32, 9].includes(event.keyCode) ? false : event.keyCode;
        if (keyCode && keyCode == 8) {
            setCode({ ...code, [id]: '' })
            const element = document.getElementById(Number(id) - 1);
            if (element) {
                element.focus();
            }
        } else if (keyCode) {
            if (keyCode == 13) {
                const element = document.getElementById(Number(id) + 1);
                if (element) {
                    element.focus();
                }
                if (id == 6) {
                    handleVerify()
                }
            }
            if (isNumeric(value)) {
                value = value.split('')
                value[value.length - 1]
                setCode({ ...code, [id]: value[value.length - 1] })
                const element = document.getElementById(Number(id) + 1);
                if (element) {
                    element.focus();
                }
            }
        }
    }
    return (
        <div>
            <VerificationInputBox id="1" onKeyDown={handleChange} value={code[1]} type="text" size="large" />
            <VerificationInputBox id="2" onKeyDown={handleChange} value={code[2]} type="text" size="large" />
            <VerificationInputBox id="3" onKeyDown={handleChange} value={code[3]} type="text" size="large" />
            <VerificationInputBox id="4" onKeyDown={handleChange} value={code[4]} type="text" size="large" />
            <VerificationInputBox id="5" onKeyDown={handleChange} value={code[5]} type="text" size="large" />
            <VerificationInputBox id="6" onKeyDown={handleChange} value={code[6]} type="text" size="large" />
        </div>
    )
}

export default VerificationInput;