

export const CartItemsContainer = (props) => {
    return (
        <>
            <div >
                {props.children}
            </div>
            <div >
                <p> Total amount: <span> {props.totalAmount + "$"} </span></p>
            </div>
        </>
    )
}