import React from 'react';
import CardList from './list';

export default function BoardList() {
    return (
        <div className="board-list">
        <p className="boardTitle">THREE HANDS OF CARDS</p>
        <CardList cTitle='hand one' />
        <CardList cTitle='hand two'/>
        <CardList cTitle='hand three'/>
        </div>
    );
}


//render: function() {
//    // VARIABLES
//    var cards1 = [
//        <Card text="Return shoes" key={1}/>,
//        <Card text="Call Mom" key={2}/>,
//        <Card text="Book flight" key={3}/>,
//        <Card text="Pick up dry cleaning" key={4}/>
//    ];
//
//    var list1 =
//        <ListContainer
//    title={this.props.lists[0]}
//    key="list1"
//    cards={cards1}
//    />;
//
//    var cards2 = [
//        <Card text="Laundry" key={5}/>
//    ];
//
//    var list2 =
//        <ListContainer
//    title={this.props.lists[1]}
//    key="list2"
//    cards={cards2}
//    />;
//
//    var cards3 = [
//        <Card text="Go to the bank" key={6}/>,
//        <Card text="Get a haircut" key={7}/>,
//        <Card text="Schedule a band practice" key={8}/>,
//        <Card text="Fix bathroom cabinet" key={9}/>
//    ];
//
//    var list3 =
//        <ListContainer
//    title={this.props.lists[2]}
//    key="list3"
//    cards={cards3}
//    />;
