import React, { Component } from 'react';
import './Images.css';
import Img from './Img';
import LargeImage from './LargeImg';



class Images extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgLst: [
                {
                    imgSrc: 'https://cdn.pixabay.com/photo/2015/05/31/10/51/acer-791027_960_720.jpg',
                    title: 'Shayon Image One',
                    details: "Shayon Image One. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
                },
                {
                    imgSrc: '../img/2.jpg',
                    title: 'Shayon Imege Two',
                    details: "Shayon Imege Two. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
                },
                {
                    imgSrc: '../img/3.jpg',
                    title: 'Shayon Image Three',
                    details: "Shayon Image Three. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
                },
                {
                    imgSrc: '../img/4.jpg',
                    title: 'Shayon Image Four',
                    details: "Shayon Image Four. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
                }
            ],
            imgStyle: {
                lrgImgConStyle: {
                    display: 'none'
                },
                imgListConStyle: {
                    display: 'flex'
                }
            },
            lrgImg: {
                imgSrc: '',
                title: '',
                details: ''
            }
        }
    }

    handleClick = (e) => {
        console.log("this is working fine");
        e.preventDefault();



        if (this.state.imgStyle.imgListConStyle.display === 'flex') {
            console.log("Large Image title: " + this.state.lrgImg.title);

            this.setState({
                imgStyle: {
                    lrgImgConStyle: {
                        display: 'block'
                    },
                    imgListConStyle: {
                        display: 'none'
                    }
                },
            });

            Object.values(this.state.imgLst).forEach(element => {
                console.log(element.imgSrc);
                let sourceString = '..' + e.target.src.toString().slice(21);
                console.log(sourceString);



                if (element.imgSrc === sourceString) {
                    console.log("Source is matched");
                    console.log("Elelment title: " + element.title);


                    this.setState({
                        lrgImg: {
                            imgSrc: e.target.src,
                            title: element.title,
                            details: element.details
                        }
                    });
                } else {
                    console.log("Source didn't match");
                }
            });

        } else {
            console.log("Something went wrong");

        }
    }

    closeLargeImage = (e)=>{
        e.preventDefault();
        console.log("close button is working fine");
        this.setState({
            imgStyle: {
                lrgImgConStyle: {
                    display: 'none'
                },
                imgListConStyle: {
                    display: 'flex'
                }
            },
        });
    }

    buttonStyle = {
        background: 'none',
        border: 'none'
    }



    render() {
        let imageItemList = this.state.imgLst.map(image => {
            return (
                <button onClick={this.handleClick} style={this.buttonStyle} key={image.imgSrc} ><Img src={image.imgSrc}></Img></button>
            );
        })



        return (
            <React.Fragment >
                <div className="lg-img-con" style={this.state.imgStyle.lrgImgConStyle}>
                    <LargeImage closeButton={this.closeLargeImage} title={this.state.lrgImg.title} details={this.state.lrgImg.details} src={this.state.lrgImg.imgSrc}></LargeImage>
                    {/* <LargeImage title={this.state.lrgImg.title} details={this.state.lrgImg.details} src={this.state.lrgImg.imgSrc}  > <LargeImage/> */}
                </div>
                <div className="wrapper" style={this.state.imgStyle.imgListConStyle}>
                    {imageItemList}
                </div>
            </React.Fragment>
        );
    }
}


export default Images;
