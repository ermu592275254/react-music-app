import React from "react";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
import './swiper.less'

class ComSwiper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            swiperID:'',
            paginateID:''
        }
    }

    componentDidMount() {
        new Swiper(this.swiperID, {
            pagination: {
                el: this.paginateID,
            },
            autoplay: true,
            speed: 300
        })
    }
    render() {
        const items = this.props.list;
        return (
            <div className="com-banner">
                <div  className="swiper-container" ref={self => this.swiperID = self}>
                    <div  className="swiper-wrapper">
                        {items.map((item,index)=>{
                            return (<div key={'img'+index} className="swiper-slide">
                                <img src={item} alt=""/>
                            </div>)
                        })}
                    </div >
                    <div className="swiper-pagination banner-pagination" ref={self => this.paginateID = self}></div>
                </div >
            </div>
        )
    }
}

export default ComSwiper