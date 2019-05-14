import $ from 'jquery';
import './carousel.css';

var carousel = {
    init(){
        console.log('carousel init...')
        this.render()
    },
    render(){
       $('body').append($('<div id ="carousel">我是轮播</div>'))   
    }
}

export {carousel}