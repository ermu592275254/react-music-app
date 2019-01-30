import React from 'react'
import GardTitle from './GardTitle'
import GradItem from './GardItem'

class GardsBox extends React.Component{
    render(){
        let gards = this.props.list;
        return(
            <div className="gard-box">
                <GardTitle title={this.props.title}/>
                <div className="gard-row">
                    {gards.map((item,index)=>{
                        return <GradItem key={'gard'+index} data={item}/>
                    })}
                </div>
            </div>
        )
    }
}

export default GardsBox