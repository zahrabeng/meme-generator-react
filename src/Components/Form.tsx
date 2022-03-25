export default function Form (): JSX.Element{
return(
    <main>
        <form>
            <input type="text" className="form-input"/>
            <input type="text" className="form-input"/>
            <button className="new-meme-button">
            Get a new meme image  🖼
            </button>
        </form>
    </main>
    )
}