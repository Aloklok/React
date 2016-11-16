import React from 'react';
import {Link,browserHistory} from 'react-router';

const CardModal = React.createClass({
	componentDidUpdate(){
		this.refs.front.focus();
	},
	render(){
		//pass in an edit or new card(only with deskId) obj 
		//and a onDelete functinon.
		let{card,onDelete}= this.props;
		return(
			<div className='modal'>
				<h1>{onDelete? 'Edit':'New'} Card</h1>
				<lable>Card Front:</lable>
				<textarea ref='front' defaultValue={card.front}></textarea>
				<lable>Card Back:</lable>
				<textarea ref='back' defaultValue={card.back}></textarea>
				<p>
					<button onClick={this.onSave}> Save card</button>
					<Link className='btn' to={`/deck/${card.deckId}`}> Cancel </Link>
					{onDelete?(<button onClick={this.onDelete} className='delete'>Delete Card</button>):null}
				</p>
			</div>
		);
	},
	onSave(event){
		var front = this.refs.front.value;
		var back = this.refs.back.value;
		this.props.onSave(Object.assign({},this.props.card,{
			front,
			back}));
		browserHistory.push(`/deck/${this.props.card.deckId}`); 
	},
	onDelete(event){
		this.props.onDelete(this.props.card.deckId);
		browserHistory.push(`/deck/${this.props.card.deckId}`);
	}
});

export default CardModal;