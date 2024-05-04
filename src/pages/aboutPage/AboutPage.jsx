import React, {useRef} from 'react';
import ModalWindow from "../../components/modalWindow/ModalWindow";

function AboutPage(props) {
    const refName = useRef()
    const refUsername = useRef()
    const refEmail = useRef()
    const handleClickCreate  = ()=> {
        console.log({
            name: refName.current.value,
            username: refUsername.current.value,
            email: refEmail.current.value
        })
        CLOSE
    }
    return (
        <div>
           <ModalWindow content={<div style={{
               marginTop: 30,
               display: 'flex',
               flexDirection: 'column',
               gap: 30
           }}>
               <input placeholder={'name'} ref={refName}/>
               <input placeholder={'username'} ref={refUsername}/>
               <input placeholder={'email'} ref={refEmail}/>
               <button onClick={handleClickCreate}>Create</button>
           </div>}/>
        </div>
    );
}

export default AboutPage;

