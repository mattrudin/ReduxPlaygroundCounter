const initialState = {
	count: 0
};

export const reducer = (state = initialState, action) => {
	switch(action.type) {
	    case 'INCREMENT':
	      return{
	      	count: state.count + 1
	      };
	    case 'DECREMENT':
	      return{
	      	count: state.count - 1
	      };
	    case 'INCREMENT_TWO':
	      return{
	      	count: state.count + 2
	      };
	    case 'DECREMENT_TWO':
	      return{
	      	count: state.count - 2
	      };
	    default:
	      return state;
  	}
};