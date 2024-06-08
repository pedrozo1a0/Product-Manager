import { useState } from "react";
import axios from 'axios';
const FormProduct = ({addProduct}) =>{
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
  
    
    const enviarAFormulario = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/newProduct', {
            title,
            price,
            description
        },{
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            console.log(response);
            addProduct(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
       
    };

    return(
        <>
            
            <form onSubmit={enviarAFormulario}>
                <p>
                    <label htmlFor="title"> Title</label> <br/>
                    <input id="title"
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e)=> setTitle(e.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="price"> Price</label> <br/>
                    <input id="price"
                        type="number"
                        name="price"
                        value={price}
                        onChange={(e)=> setPrice(e.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="description"> Description</label> <br/>
                    <input id="description"
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e)=> setDescription(e.target.value)}
                    />
                </p>
                <button>Enviar</button>
            </form>
        </>
    )
}

export default FormProduct;