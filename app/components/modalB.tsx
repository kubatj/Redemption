import { useState } from "react"

type Props = {
    open: boolean;
    onClose: () => void;
    setValue: (textValue: string) => void;
}


const ModalB = ({ open, onClose, setValue}: Props) => {
    const [textValue, setTextValue] = useState('');


    const handleSave = () => {
     setValue(textValue)
     onClose();
    }


    if(open) {
        return(
             <div style={{width: "100%",  height: "100%", position: "relative"}}>
                    <div style={{display: "flex", flexDirection:"column",  alignItems: "center", justifyContent: "center", height: "100vh"}}>
                            <h1>Modal B</h1>
                            <div style={{display: "flex", alignItems:"center", gap: "8px"}} >
                                <label about="test">my text</label>
                                <input value={textValue} id="test" name="text-input" type="text" onChange={(e) => setTextValue(e.target.value)}/>
                                <button onClick={handleSave}>save</button>
                            </div>
                            

                    </div>
                    
                    <div style={{position: "absolute", top: "0", right: "0"}}>
                        <button onClick={onClose}>x</button>
                    </div>
                </div>
        )
    }

    return null
    
}

export default ModalB