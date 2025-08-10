import React from "react"
//import heisen from "./assets/Cousin.jpg"
import { stickerCollection } from "../index.js"   

export default function Stickers() {

const [stickers, setStickers] = React.useState(stickerCollection)

const allStickers = stickers.map(sticker => {
    return (
        <div className="sticker-container">
            <div className="sticker">
                <div className="face">
                    <img src={sticker.image} alt="THE FRONT"/>
                </div>
                <div className="face back">
                    <p>{sticker.date}</p>
                    <p>{sticker.location}</p>
                    <p>{sticker.round}</p>
                </div>
            </div>
        </div>
    )
})

    return (
        <div className="sticker-page">
            <h1>Stickers</h1>
		    <p>Here is our collection of Trivia Stickers. Highlight each one to learn more about it.</p>
            <div className="sticker-grid">
                {allStickers}
            </div>
        </div>
    )
}







// THIS MIGHT BE USED FOR SOMETHING OTHER THAN IMAGE URLs IN THIS PROJECT
// LOCAL IS BETTER AND MAKES MORE SENSE FOR IMAGES...

// import { collection, onSnapshot } from 'firebase/firestore';
// import { db } from "./firebase.js"

// React.useEffect(() => {
//         const unsubscribe = onSnapshot(collection(db, "Stickers"), (querySnapshot) => {
//             // querySnapshot automatically contains all documents from "stickers" collection
//             const stickerData = [];
            
//             querySnapshot.forEach((doc) => {
//                 // doc.id = document ID
//                 // doc.data() = document fields
//                 stickerData.push({
//                     id: doc.id,
//                     ...doc.data()
//                 });
//             });
//             setStickers(stickerData);
//         });

//         return () => unsubscribe();
//     }, []);

// const test = stickers?.map(item => {
//    return (
//         <div key={item.id}>
//             <img src={item.imageUrl} />
//             <p>{item.desc}</p>
//         </div>
//     )
// })