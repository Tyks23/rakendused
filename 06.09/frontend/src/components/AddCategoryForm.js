import { useRef } from "react";

function AddCategoryForm(props) {
    const nameInputRef = useRef();
    const typeInputRef = useRef();

    function formSubmitHandler(e) {
        e.preventDefault();
        
        const nameValue = nameInputRef.current.value;
        const typeValue = typeInputRef.current.value;

        const category = {
            name: nameValue,
            category: typeValue
        }
        console.log(category)
        props.onAddCategory(category);
    }
    return (
        <form onSubmit={formSubmitHandler}>
            <label>Kategooria nimi</label><br />
            <input type="text" placeholder="Nimi" required ref={nameInputRef} /><br />
            <label>Kategooria tüüp</label><br />
            <select ref={typeInputRef}>
                <option value="PREMIUM">PREMIUM</option>
                <option value="DELUXE">DELUXE</option>
                <option value="BASIC">BASIC</option>
            </select>
            <br /><br />
            <button>Sisesta uus kategooria</button>
        </form>
    )
}

export default AddCategoryForm