import React, { Component } from 'react';
import Box from './Box.component';

export default class Board extends Component {
    render() {
        const width = this.props.cols * 20;
        const height = this.props.rows * 20;
        var gridArray = [] ;

        for(var i = 0; i < this.props.rows; i++ ) {
            for(var j = 0; j < this.props.cols; j++ ) {
                var boxId = i + '_' + j;

                gridArray.push(
                    <Box 
                        key={boxId}
                        row={i}
                        col={j}
                    />
                );
            }
        };

        return (
            <div className="flex gap-1 flex-wrap" style={{width: width + 'px', height: height}}>
                {gridArray}
            </div>
        )
    }
}