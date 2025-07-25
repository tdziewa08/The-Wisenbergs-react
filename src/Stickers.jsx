import heisen from "./assets/sticker-test.png"

export default function Stickers() {

const stickerGrid =
        <div className="stickers">
            <img src={heisen}/>
            <img src={heisen}/>
            <img src={heisen}/>
            <img src={heisen}/>
            <img src={heisen}/>
            <img src={heisen}/>
            <img src={heisen}/>
            <img src={heisen}/>
            <img src={heisen}/>
            <img src={heisen}/>
            <img src={heisen}/>
            <img src={heisen}/>
            <img src={heisen}/>
            <img src={heisen}/>
            <img src={heisen}/>
            <img src={heisen}/>
        </div>

    return (
        <>
            <h1>Stickers</h1>
		    <p>Here is our collection of Trivia Stickers. Highlight each one to learn more about it.</p>
            <div className="sticker-grid">
                <div className="sticker-container">
                    <div className="sticker">
                        <div className="face"><img src={heisen} alt="THE BACK"/></div>
                        <div className="face back">THIS</div>
                    </div>
                </div>
                <div className="sticker-container">
                    <div className="sticker">
                        <div className="face"><img src={heisen} alt="THE BACK"/></div>
                        <div className="face back">TOOK</div>
                    </div>
                </div>
                <div className="sticker-container">
                    <div className="sticker">
                        <div className="face"><img src={heisen} alt="THE BACK"/></div>
                        <div className="face back">A</div>
                    </div>
                </div>
                <div className="sticker-container">
                    <div className="sticker">
                        <div className="face"><img src={heisen} alt="THE BACK"/></div>
                        <div className="face back">LOT</div>
                    </div>
                </div>
                <div className="sticker-container">
                    <div className="sticker">
                        <div className="face"><img src={heisen} alt="THE BACK"/></div>
                        <div className="face back">LONGER</div>
                    </div>
                </div>
                <div className="sticker-container">
                    <div className="sticker">
                        <div className="face"><img src={heisen} alt="THE BACK"/></div>
                        <div className="face back">THAN</div>
                    </div>
                </div>
                <div className="sticker-container">
                    <div className="sticker">
                        <div className="face"><img src={heisen} alt="THE BACK"/></div>
                        <div className="face back">I</div>
                    </div>
                </div>
                <div className="sticker-container">
                    <div className="sticker">
                        <div className="face"><img src={heisen} alt="THE BACK"/></div>
                        <div className="face back">THOUGHT</div>
                    </div>
                </div>
            </div>
        </>
    )
}