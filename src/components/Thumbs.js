import React, { Component } from 'react';
import Project from '../components/Project';
import Portfolio2Image from '../assets/scrollingWeb.JPG';

class Thumbs extends Component {

  componentDidMount() {
    var time = 3000;

    function randomThumb() {
      var thumb = document.getElementsByClassName("thumb");

      var item = thumb[Math.floor(Math.random()*thumb.length)];
      var animation = "tada";

      item.classList.add("animated");
      item.classList.add(animation);

      setTimeout(function() { 
        item.classList.remove("animated");
        item.classList.remove(animation);
      }, time);
    }

    setInterval(randomThumb, time);

    
    console.log();
  }

  render() {
    return (
    <React.Fragment>
    <div className="container-fluid">
      <div className="row">
        <Project  thumb="portfolio2.png"  
                  name="portoflio2" 
                  title="Portfolio 2" 
                  link={Portfolio2Image} 
                  text="A web design project I have created for myself that is incorporated with a lot of big typography." 
        />
       
        <Project thumb="sinucreative.png" 
                 name="sinucreative" 
                 title="SinuCreative" 
                 link="https://michalsinu.github.io/sinucreative/" 
                 text="A project for myself as another portfolio design, with a nice parallax effect and a huge jumbotron type image. This project has been discontinued as the current website was chosen to be better." 
        />
       
        <Project thumb="stevejobsmemorial.png" 
                 name="stevejobsmemorial" 
                 title="Steve Jobs Memorial - FreeCodeCamp" 
                 link="https://codepen.io/Exedious/full/LQLWoO/"
                 text="Project that has been created through FreeCodeCamp, as a project to demonstrate my skills." 
        />
      </div>
    </div>
    </React.Fragment>
    );
  }
}

export default Thumbs;
