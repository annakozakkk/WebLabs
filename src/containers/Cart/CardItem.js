import {useDispatch} from "react-redux";
import { actionsType } from '../../Store/store';
// import close from './../../assets/close.png'
// import minus from './../../assets/minus.png'
// import plus from './../../assets/plus.png'

export const CartItem = (props) => {
    const dispatch = useDispatch();

    function deleteFromCart() {
        dispatch({
            type: actionsType.deleteFromCart,
            bookToDelete: props.bicycle
        })
    }

    function addSameItem() {
        dispatch({
            type: actionsType.addSameItem,
            bookToUpdate: props.bicycle
        })
    }

    function deleteSameItem() {
        dispatch({
            type:actionsType.deleteSameItem,
            bookToUpdate:props.bicycle
        })
    }

    return (
        <div >
            <div>
                <img src={props.bicycle.image} alt={"cart"}/>
                <div>
                    <h3>{props.bicycle.title}</h3>
                    <p>{props.bicycle.type}</p>
                </div>
            </div>
            <div >
                <button onClick={deleteSameItem}>
                    {/* <img src={minus} alt={'minus'}/> */}
                </button>
                <p>
                    <strong>{props.book.countOfSameBooks}</strong>
                </p>
                <button onClick={addSameItem}>
                    {/* <img src={plus} alt={'plus'}/> */}
                </button>
            </div>
            <div >
                <p> {props.bicycle.price + "$"}</p>
                <button onClick={deleteFromCart}>
                    {/* <img src={close} alt={'delete'}/> */}
                </button>
            </div>
        </div>
    )
}