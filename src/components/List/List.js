import React from 'react';
import './List.module.css';

const List = props => {
    return (
        <div className="checkbox__field">
            <label className="checkbox__container" data-filter={props.name} onClick={()=>props.clicked(false)}>{props.name}
                {props.allChecked ? <input type="checkbox" checked data-filter={props.name}/> :
                <input type="checkbox" data-filter={props.name}/>}
                <span className="checkmark"></span>
            </label>
        </div>
    )
}

export default List
