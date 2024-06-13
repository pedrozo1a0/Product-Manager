
import { useState } from "react";
import style from "./FormProduct.module.css";
const FormProduct = ({onSubmitProp, initialTitle, initialPrice, initialDescription}) =>{
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
  
    
    const enviarAFormulario = (e) => {
        e.preventDefault();
        onSubmitProp({title, price, description});
    };

    return(
        <>
            
            <form className={style.form} onSubmit={enviarAFormulario}>
                <p>
                    <label htmlFor="title"> Title</label> <br/>
                    <input className={style.input} id="title"
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e)=> setTitle(e.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="price"> Price</label> <br/>
                    <input className={style.input} id="price"
                        type="number"
                        name="price"
                        value={price}
                        onChange={(e)=> setPrice(e.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="description"> Description</label> <br/>
                    <input className={style.input} id="description"
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e)=> setDescription(e.target.value)}
                    />
                </p>
                <div className={style.Divbutton}>
                    <button className={style.button}>Enviar</button>
                </div>
            </form>
        </>
    )
}

export default FormProduct;
