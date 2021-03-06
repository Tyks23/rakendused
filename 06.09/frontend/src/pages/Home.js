import CategoryList from '../components/CategoryList';
import {Link} from 'react-router-dom';
import ItemList from '../components/ItemList';
import {useState, useEffect} from 'react';

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const[loadedItems, setLoadedItems] = useState([]);
    const [loadedCategories, setLoadedCategories] = useState([]);

    useEffect(() => {

    
    fetch('http://localhost:8080/items').then(res => {
        return res.json();
    }).then(data => {
       // console.log(data);
        setIsLoading(false);
        setLoadedItems(data);
    });
    },[])

    useEffect(()=>{
        fetch('http://localhost:8081/categories').then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            setIsLoading(false);
            setLoadedCategories(data);
        });
    }, [])

    if(isLoading){
        return(<div>Laeb</div>)
    }
    return (
        <div>
            <Link to="add-item">
                <button>Lisa uus ese</button>
            </Link>
            <ItemList items={loadedItems} />
            <br />
            <Link to="add-category">
                <button>Lisa uus kategooria</button>
            </Link>
            <CategoryList categories={loadedCategories} />
        </div>
    );
    return(<div>Laeb</div>)
}

export default Home;