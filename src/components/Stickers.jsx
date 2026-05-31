import React from "react"
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
            <h1>Sticker Collection</h1>
		    <p>When you score the highest points for a round you are awarded a sticker. Highlight a sticker to learn more about it.</p>
            <div className="sticker-grid">
                {allStickers}
            </div>
        </div>
    )
}