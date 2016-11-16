import {updateCard,deleteCard} from '../actions';
import {connect} from 'react-redux';
import CardModal from './CardModal';

//Only have one card to edit.
//Add state.card as an object.
const mapStateToProps = ({cards},{params:{cardId}}) =>({
	card: cards.filter(card => card.id == parseInt(cardId,10))[0] //cardId is string,while cards.id is number.
});

const mapDispatchToProps = (dispatch,{params:{cardId}}) => ({
	onSave: card => dispatch(updateCard(card)),
	onDelete: card => dispatch(deleteCard(parseInt(cardId,10)))
});

export default connect(mapStateToProps,mapDispatchToProps)(CardModal);