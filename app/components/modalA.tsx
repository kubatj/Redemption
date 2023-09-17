type Props = {
    open: boolean;
    onClose: () => void;
    valueToDisplay: any;
}



const ModalA = ({ open, onClose, valueToDisplay }: Props) => {

    console.log('value', valueToDisplay);


    if(open) {
        return(
             <div style={{width: "100%",  height: "100%", position: "relative"}}>
                    <div style={{display: "flex", flexDirection:"column",  alignItems: "center", justifyContent: "center", height: "100vh"}}>
                            <h1>Modal A</h1>
                            <p>{valueToDisplay?.current ? valueToDisplay.current : "default text" }</p>
                    </div>
                    
                    <div style={{position: "absolute", top: "0", right: "0"}}>
                        <button onClick={onClose}>x</button>
                    </div>
                </div>
        )
    }

    return null;
    
}

export default ModalA