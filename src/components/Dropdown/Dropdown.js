import React,{useState, useEffect} from 'react';
import List from '../List/List';
import styles from './Dropdown.module.css';

const Dropdown = props => {

    const [updatedfilters, setUpdatedfilters]=useState([])
    const [allChecked, setAllChecked]=useState(false)

    useEffect(()=>{
        setUpdatedfilters(props.content)
    },[])

    const submitHandler=e=>{
        e.preventDefault();
        const nodes=e.target.querySelectorAll('input[type="checkbox"]:checked')
        const nodeValues=[...nodes].map(item=>item.dataset.filter)

        props.clicked({
            filterName:'Colors',
            values:nodeValues
        })
    }

    const searchHandler=e=>{
        const filteredArray=props.content.filter(item=>{
            return item.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setUpdatedfilters(filteredArray)
        if(e.target.value==''){
            setUpdatedfilters(props.content)
        }
    }

    const selectAllHandler=e=>{
        setAllChecked(!allChecked)
    }

    console.log("dropdown executed",props)

    return (
        <section className={styles.dropdown__container}>
            <h2 className="heading-primary">Dropdown</h2>
            <input type="text" placeholder="Search" className="form__input" onChange={searchHandler}/>

            <div className={styles.checkBoxfield__container}>
                <div className={styles.ff}>
                    <div className="checkbox__field">
                    <label className="checkbox__container">
                        <input type="checkbox" onClick={selectAllHandler} checked={allChecked}/>
                        <span className="checkmark"></span>
                    </label>
                    </div>
                </div>
                <form onSubmit={submitHandler} className="checkbox__form" >
                    <div className={styles.checkboxlist__container}>
                        {updatedfilters.map(item=>(
                            <div key={Math.random()}><List name={item} clicked={setAllChecked} allChecked={allChecked}/></div>
                        ))}
                    </div>
                    <div className={styles.button__container}>
                        <button className="btn btn-default" type="reset">Clear</button>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Dropdown
