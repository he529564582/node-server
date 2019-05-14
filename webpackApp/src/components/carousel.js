import $ from 'jquery';
import './carousel.css';
import logo from './logo.jpg';

var carousel = {
    init(){
        console.log('carousel init...');
        this.render()
    },
    render(){
       $('body').append($(`<div id ="carousel">我是轮播</div>`))   
       $('body').append($(`<div id ="carousel"><img src ='${logo}'></div>`))
       $('body').append($(`<div id ="carousel">'${logo}'</div>`))

      
       console.log(logo)
    }
}

export {carousel}