import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const CartItem = ({product, setMatchProduct, matchProduct}) => {
    const {_id, productImg, productName, productType, shortDescription, productPrice, productRating} = product
    const handleDelete = (id) => {
        

        fetch(`http://localhost:5000/cart/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const newCartItem = matchProduct.filter(product => product._id !== id)
            setMatchProduct(newCartItem)
           
           
            
        })
        
        
    }



    return (
        <div className="card lg:w-96 bg-base-100 shadow-xl">
                <figure><img src={productImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {productName}
                        
                    </h2>
                    <div className="badge badge-secondary"><p className="text-white">{productType}</p></div>
                    <p>{shortDescription}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">${productPrice
                        }</div>
                        <div className="badge badge-outline"><Rating
                            placeholderRating={productRating
                            }
                            emptySymbol={<AiOutlineStar/>}
                            placeholderSymbol={<AiFillStar color="	#ffa534"/>}
                            fullSymbol={<AiFillStar color="	#ffa534"/>}
                        /></div>
                    </div>
                   
                        <Link onClick={()=> handleDelete(_id)} className="btn btn-default">Delete</Link>
                        
                 
                </div>
            </div>
    );
};

export default CartItem;