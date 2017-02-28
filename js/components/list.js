import React from 'react';
import Card from './card';

export default function CardList(props) {
    return (
        <div className="card-list">
        <p className="listTitle">{props.cTitle}</p>
        <Card name="Ace of Spades" />
        <Card name="5 of Clubs" />
        <Card name="2 of hearts" />
        </div>
    );
}


//        <form>
//        <input type="text">
//        <input type="submit" value"Submit">
//        </form>

//function Button(props) {
//    return <button onClick={props.onClick}>{props.text}</button>;
//}
//
//class Surprise extends React.Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            clicked: false
//        };
//        this.onButtonClick = this.onButtonClick.bind(this);
//    }
//
//    onButtonClick() {
//        this.setState({
//            clicked: true
//        });
//    }
//
//    render() {
//        return (
//            <div>
//            <Button onClick={this.onButtonClick} text='Ready to be amazed?' />
//            {this.state.clicked ? <SoundCloudEmbed trackId='191075550' /> : null}
//            </div>
//        );
//    }
//}
//
//document.addEventListener('DOMContentLoaded', () =>
//                          ReactDOM.render(<Surprise />, document.getElementById('app'))
//);
