
import { TextInput ,PasswordInput} from "./input.styles"
export const Input = ({ type="text", ...props }) => {
    if(type.toLowerCase() == 'text') return ( <TextInput {...props}/> )
    else if(type.toLowerCase() == "password") return ( <PasswordInput {...props}/> )
    else return ( <TextInput {...props}/> )
}


