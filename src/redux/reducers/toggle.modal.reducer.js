const initState = 'must-visit-info-modal';

const toggleModalReducer = (state = initState, action) => {
  switch (action.type) {

    case 'TOGGLE_MODAL' :
      return action.payload ? 'must-visit-info-modal active' : 'must-visit-info-modal';
      
    default:
      return state;
  }  
}

export default toggleModalReducer;