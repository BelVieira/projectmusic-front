import React from 'react';

export default class Card extends React.Component{
    render(){
        return(
            <div className='card md-3'>
                <h3 className='card-header'>{this.props.title}</h3>
                <div className='card-body'></div>
                    {this.props.children}
                
            </div>
        )
    }
}