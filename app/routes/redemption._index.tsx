import { useState, useRef } from "react";
import ModalA from "~/components/modalA";
import ModalB from "~/components/modalB";

const Redemption = () => {
    const [openA, setOpenA] = useState(false);
    const [openB, setOpenB] = useState(false);
    const valueRef =  useRef<string>('');

    const handleSetValue = (values: string) => {
        valueRef.current = values;
    }

  

    return (
        <main>
            {
                openA || openB || 
                (<section>
                 <h1>Redemption</h1>
                    <button onClick={() => setOpenA(true)}>Pop up A </button>
                    <button onClick={() => setOpenB(true)}>Pop up b </button>
                </section>)
            }
        
            <section>
             <ModalA open={openA} onClose={() => setOpenA(false)} valueToDisplay={valueRef}/>
             <ModalB open={openB} onClose={() => setOpenB(false)} setValue={handleSetValue}/>
            </section>
        </main>
    );
}

export default Redemption