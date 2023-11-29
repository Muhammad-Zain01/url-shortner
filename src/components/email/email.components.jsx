import { Input } from '../input/input.component'
import { Button } from '../button/button.component'
const Email = () => {
    return (
        <div style={{display: 'flex', padding: "20px 0px", flexDirection: 'column'}}>
            <Input placeholder="Enter email to proceed" />
            <div style={{display:'flex', justifyContent: 'center', padding: '20px 0px'}}>
                <Button type="primary">Proceed</Button>
            </div>
        </div>
    )
}

export default Email;