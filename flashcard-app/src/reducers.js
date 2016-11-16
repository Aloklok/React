//cards state should be an array.
export const cards = (state,action) => {
	switch (action.type){
		case 'ADD_CARD':
			let newCard = Object.assign({},action.data,{
				score:1,
				id: +new Date()
			});
			return state.concat([newCard]);
		case 'UPDATE_CARD':
			let cardUpdate = action.data;
			return state.map(card =>(card.id !== cardUpdate.id)?
			card:Object.assign({},card,cardUpdate)); //update
		case 'DELETE_CARD':
			return state.filter(card => card.id !== action.data)
		case 'RECEIVE_DATA':
			return action.data.cards || state;
		default:
			return state || []; // init the state as [] or not to change the state 
	}
};
//decks state should be an array.
export const decks = (state,action) => {
	switch(action.type){
		case 'ADD_DECK':
			let newDeck = {name:action.data, id:+new Date()};
			return state.concat([newDeck]);
		case 'RECEIVE_DATA':
			return action.data.decks || state;
		default:
			return state || [];
	}
};

//addingDeck state should be a boolean.
export const addingDeck = (state,action) => {
	switch(action.type){
		case 'SHOW_ADD_DECK': 
			return true;
		case 'HIDE_ADD_DECK': 
			return false;
		default:
			return !!state;
	}
};

//Directly return the 'query' parameter.
export const cardFilter = (state,action) => {
	switch(action.type){
		case 'FILTER_CARDS':
			return action.data;
		default: return state || '';
	}
};

//showBack state should be a boolean.
export const showBack = (state,action) => {
	switch(action.type){
		case 'SHOW_BACK':
			return action.data || false;
		default: 
			return state || false ;
	}
};