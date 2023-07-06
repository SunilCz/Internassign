
const cart = [] 

const handleCart = (state = cart, action) => {
  const product = action.payload 
  switch(action.type) {
    case "ADDITEM":
        // check if exist or not 
        const exist = state.find((x)=> x.id === product.id)
        if(exist) {
            // increasing the Quntity 
            return state.map((x)=> x.id === product.id ? {...x , qty : x.qty + 1} : x)
        }
        else {
            const product = action.payload;
            return [
                ...state,
                {
                    ...product,
                    qty : 1
                }
            ]
        }
        break
    case "DELETEITEM":
        const exist1 = state.find((x)=> x.id === product.id)
        if (exist1 == undefined ){
            break
        }
        if ( exist1.qty == 1){
            return state.filter((x)=> x.id !== exist1.id);
        }else {
            return state.map((x)=> 
            x.id === product.id ? {...x,qty: x.qty-1} : x 
            );
        }
        break;
    
    default :
        return state;
        break;
  }


}

export default handleCart;