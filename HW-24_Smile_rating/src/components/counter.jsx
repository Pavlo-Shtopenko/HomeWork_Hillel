import React from "react";


export class Counter extends React.Component {
    constructor() {
        super()

        this.state = {
            counter1: 0,
            counter2: 0,
            counter3: 0,
        }
        this.onButtonClick1 = this.onButtonClick1.bind(this);
        this.onButtonClick2 = this.onButtonClick2.bind(this);
        this.onButtonClick3 = this.onButtonClick3.bind(this);
        this.onButtonRatingClick = this.onButtonRatingClick.bind(this);
        this.findMax =this.findMax.bind(this);

    }

    onButtonClick1() {
        this.setState({
            counter1: ++this.state.counter1,
            renderRating: null
        })
        this.findMax()
    }
    onButtonClick2() {
        this.setState({
            counter2: ++this.state.counter2,
            renderRating: null
        })
        this.findMax()
    }
    onButtonClick3() {
        this.setState({
            counter3: ++this.state.counter3,
            renderRating: null
        })
        this.findMax()
    }
    findMax(){
        const arrRating = [this.state.counter1, this.state.counter2, this.state.counter3];
        const max = Math.max(...arrRating);
        this.setState({
            rating: arrRating.indexOf(max)
        })
    }
    onButtonRatingClick() {
        const arrRating = [this.state.counter1, this.state.counter2, this.state.counter3];
        const max = Math.max(...arrRating);
        this.setState({
            rating: arrRating.indexOf(max)
        })
        let res = ( this.state.rating === 0) ? <h2 className='smileBox'>:)</h2> :
        (this.state.rating === 1) ? <h2 className='smileBox'>:|</h2> :
        (this.state.rating === 2) ? <h2 className='smileBox'>:[</h2> :
        '';
    this.setState({
        renderRating: res
    })
    }

    render() {
        return (
            <>
            <div className="likesBox">
                <h2 className='smileBox'>:)</h2>   
                <button onClick={this.onButtonClick1} className="likeButton">Click</button>
                <p>Likes: {this.state.counter1}</p>
            </div>
            <div className="likesBox">
                <h2 className='smileBox'>:|</h2>   
                <button onClick={this.onButtonClick2} className="likeButton">Click</button>
                <p>Likes: {this.state.counter2}</p>
            </div>
            <div className="likesBox">
                <h2 className='smileBox'>:[</h2>   
                <button onClick={this.onButtonClick3} className="likeButton">Click</button>
                <p>Likes: {this.state.counter3}</p>
            </div>
            <button onClick={this.onButtonRatingClick}>Rating</button>
            <div>Winner: {this.state.renderRating}</div>
            </>
        )
    }
}