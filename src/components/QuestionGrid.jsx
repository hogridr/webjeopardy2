import React from 'react';
import GridItem from './GridItem';
import { colNameTextSizeScaler } from '../utils';
/*
* props.questionJSON: generic.content (see ../../generic.json)
*/
const QuestionGrid = (props) => {
    return (
        <div className="jeopardy-grid">
            {props.questionJSON.map((col, colIndex) => {
                return (
                    <div className="grid-col" key={colIndex}>
                        <span className="grid-title" style={{
                            fontSize: col.colName.length > 15? `${colNameTextSizeScaler(col.colName.length)}rem` : "2rem",
                            margin: col.colName.length > 15? "0.25rem 0 0.25rem 0" : "0.5rem 0 0.5rem 0",
                        }}>{col.colName}</span>
                        <div style={{width:"100%"}}>
                        {col.colItems.map((item, itemIndex) => {
                            return (
                                <GridItem 
                                score={item.score}
                                colIndex={colIndex} 
                                itemIndex={itemIndex} 
                                gameName={props.gameName} 
                                visited={item.visited}
                                selectItem={props.selectItem}
                                />
                            );
                        })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default QuestionGrid;
