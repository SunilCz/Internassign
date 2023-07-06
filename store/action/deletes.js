const deleteCart = (product) => {
    return {
        type: "DELETEITEM",
        payload : product
    }
}
export default deleteCart