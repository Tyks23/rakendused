function Cart() {
    return (
        <div className="div">
            <h1>Lisa uus Kategooria</h1>
            <form>
                <p>Sisesta kategooria nimi</p>
                <input placeholder="nimi"></input>
            
                <p>Sisesta kategooria tüüp</p>
                <select placeholder="kategoori">
                    <option>BASIC</option>
                    <option>ADVANCED</option>
                </select>
            </form>
            <button className="button">Lisa</button>
        </div>
    );
}

export default Cart;