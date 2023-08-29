import { useState, useEffect } from "react"
import data from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
function Review (){
const [index, setIndex] = useState(0)
const {name, image, job,text} = data[index]
 
const prevPerson= ()=>{
    setIndex((prevIndex) => {
        let newIndex = prevIndex - 1
        return checkNumber(newIndex)
    }
        )
}
const nextPerson= ()=>{
    setIndex((prevIndex) => {
        let newIndex = prevIndex + 1
        return checkNumber(newIndex)
    }
        )
}
function checkNumber(number){
    if(number > data.length -1){
        return 0
    } else if(number < 0){
        return data.length - 1
    }
    return number
}
const randomPerson =()=>{
    let randomNumber = Math.floor(Math.random()* data.length)
    if(randomNumber === index){
        randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber))
}
    return(
        <div className="card">
            <div className="image-section">
                <img className="img" src={image} alt="" />
            </div>
            <h1 className="name">{name}</h1>
            <p className="job">{job}</p>
            <p className="text">
                {text}
            </p>
            <div className="btn-container">
                <button onClick={prevPerson}><FaChevronLeft/></button>
                <button onClick={nextPerson}><FaChevronRight/></button>
            </div>
            <button onClick={randomPerson} className="suprise">Suprise Me</button>
        </div>
    )
}
export default Review