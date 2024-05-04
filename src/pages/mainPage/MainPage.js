import React, {useContext} from 'react';
import AboutPage from "../aboutPage/AboutPage";
import {ModalContext} from "../../context/ModalProvider";

function MainPage(props) {
    const {openModal} = useContext(ModalContext);
    return (
        <div>
            <button onClick={openModal}>открыть модальное окно</button>
        </div>
    );
}

export default MainPage;


// import React from 'react';
// import {useModal} from "../../context/ModalProvider";
// import ModalWindow from "../../components/modalWindow/ModalWindow";
// import AboutPage from "../aboutPage/AboutPage";
// import {ModalContext} from "../../context/ModalProvider";



// 2 вариант


// const MainPage = ({children}) => {
//     const { openModal } = useModal();
//
//     return (
//         <div>
//             <h1>Main Page</h1>
//             <button onClick={openModal}>Open Modal</button>
//         </div>
//     );
// };
//
// export default MainPage;