import React from 'react'
import {connect} from 'react-redux'
import '../../styles/dissInfo.less'
import {replacePlayList,playSong} from '../../redux/actions'


import DissHeader from './DissHeader'
import DissCard from './DissCard'
import DissList from './DissList'


class DissInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bgColor:'#ccc'
        }
    }
    _setWheelBgtcMainTonal = (canvas, img) => {
        canvas.width = img.width
        canvas.height = img.height
        let context = canvas.getContext('2d')
        context.drawImage(img, 0, 0)
        // 获取像素数据
        let data = context.getImageData(0, 0, img.width, img.height).data
        let r = 0,
            g = 0,
            b = 0
        // 取所有像素的平均值
        for (let row = 0; row < img.height; row++) {
            for (let col = 0; col < img.width; col++) {
                r += data[(img.width * row + col) * 4]
                g += data[(img.width * row + col) * 4 + 1]
                b += data[(img.width * row + col) * 4 + 2]
            }
        }
        // 求取平均值
        r /= img.width * img.height
        g /= img.width * img.height
        b /= img.width * img.height

        // 将最终的值取整
        r = Math.round(r)
        g = Math.round(g)
        b = Math.round(b)

        //rgb转16进制 位运算
        const color = ((r << 16) | (g << 8) | b).toString(16)
        return color
    };
    componentDidMount(){
        const canvas = this.refs.canvas,
            img = this.refs.img;
        this.setState({
            bgColor:'#' + this._setWheelBgtcMainTonal(canvas,img)
        })
    }
    playSong=(song)=>{
        this.props.dispatch(playSong(song));
    }
    playAll=()=>{
        this.props.dispatch(replacePlayList(this.props.failArmyInfo.songList));
        this.props.dispatch(playSong(this.props.failArmyInfo.songList[0]));
    }
    more = ()=>{

    }
    render() {
        let info = this.props.failArmyInfo,
            list = this.props.failArmyInfo.songList
        return (
            <div className="diss-info" style={{backgroundColor: this.state.bgColor}}>
                <DissHeader title="歌单" style={{backgroundColor: this.state.bgColor}}/>
                <DissCard {...info}/>
                <DissList list={list} playAll={this.playAll} playSong={this.playSong}/>
                <canvas ref="canvas" style={{display:'none'}}></canvas>
                <img ref='img' src={info.imgurl} style={{display:'none'}} alt=""/>
            </div>
        )
    }
}

export default connect((state,props)=>{
    return Object.assign(state,props)
})(DissInfo)