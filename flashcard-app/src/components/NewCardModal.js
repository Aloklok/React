import CardModal from './CardModal';
import {connect} from 'react-redux';
import {addCard} from '../actions';

//add a new card obj to the state.cards[]
const mapStateToProps = (props, { params: { deckId } }) => ({
  card: { deckId }
});

const mapDispatchToProps = dispatch => ({
  onSave: card => dispatch(addCard(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);