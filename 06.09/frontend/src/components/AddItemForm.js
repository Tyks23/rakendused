import './AddItemForm.css'
import {useRef} from 'react';

function AddItemForm(props) {
    const nameInputRef = useRef();
    const priceInputRef = useRef();
    const categoryInputRef = useRef();

    function formSubmitHandler(e){
        e.preventDefault();
        const nameValue = nameInputRef.current.value;
        const priceValue = priceInputRef.current.value;
        const categoryValue = categoryInputRef.current.value;

        const item = {
            name: nameValue,
            price: priceValue,
            category: categoryValue
        }
        console.log(item);
        props.onAddItem(item);
    }

    

    

    return(
        <div>
            <form onSubmit={formSubmitHandler}>
                <label>Eseme Nimi</label> <br />
                <input type='text' placeholder='Nimi' ref={nameInputRef} /><br />
                <label>Eseme Hind</label> <br />
                <input type='text' required ref={priceInputRef}/><br />
                <label>Eseme Kategooria</label> <br />
                <input type='text' required ref={categoryInputRef} /><br />
                <button>Sisesta uus ese</button>
            </form>
        </div>
    );
}

export default AddItemForm;