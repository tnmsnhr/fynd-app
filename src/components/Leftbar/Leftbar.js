import React,{useState,useEffect} from 'react';
import Dropdown from '../Dropdown/Dropdown';
import styles from './Leftbar.module.css';

const colors=['Blue','Black','grey','red','orange','pink']
const size=['XS','S','M','L','XL','XXL','XXXL']

const Leftbar = () => {

    const [result,setResult]=useState(new Map())
    const [filterContent,setFilterContent]=useState(colors)

    useEffect(()=>{
        // const convertedResult=result.keys().map(key=>{
        //     return [{
        //         type:key,
        //         values:result.get(key)
        //     }]
        // })

        // setReadableContent(convertedResult)
        console.log(result.entries())
    },[result])

    const resultHandler= item=>{
        const newData=new Map();
        newData.set(item.filterName,item.values)
        setResult(newData)
    }

    const filterChangeHandler=e=>{
        if(e.target.value=='colors'){
            setFilterContent(colors)
        }

        if(e.target.value=='size'){
            setFilterContent(size)
        }
    }

    console.log(filterContent)

    return (
        <div className={styles.leftbar}>
            <div className={styles.leftbar__content}>
                <h1 className="heading-jumbo margin-bottom-md">Dropdown with search</h1>
                <div className={[styles.filter,'margin-bottom-sm'].join(' ')}>
                    <h2 className="heading-primary">Default</h2>
                    <div className={styles.option__input}>
                        <select className="form__input" onChange={filterChangeHandler}>
                            <option value='colors'>Colors</option>
                            <option value='size'>Size</option>
                        </select>
                    </div>
                </div>
                <div className="margin-bottom-sm">
                    <Dropdown key={Math.random()} clicked={resultHandler} content={filterContent}/>
                </div>
                <div className={styles.result}>
                    <h2 className="heading-primary">Result</h2>
                    <div className={styles.option__input}>
                        <select className="form__input">
                            <option value="new">{result}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leftbar
