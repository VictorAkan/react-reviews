import people from "./data"
import { useState } from "react"
import { FaChevronLeft,FaChevronRight,FaQuoteRight } from "react-icons/fa"

export default function Content() {
    const [index, setIndex] = useState(0)
    const { id, image, name, job, text } = people[index]
    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0;
        } else if (number < 0) {
            return people.length - 1
        }
        return number
    }
    const subIndex = () => {
        setIndex((i) => {
            let newIndex = i + 1;
            return checkNumber(newIndex)
        })
    }
    const addIndex = () => {
        setIndex((i) => {
            let newIndex = i - 1;
            return checkNumber(newIndex)
        })
    }
    const randomNumber = () => {
        const randomIndex = Math.floor(Math.random() * people.length)
        if (randomIndex === index) {
            return index + 1
        }
        setIndex(checkNumber(randomIndex))
    }
    return (
        <div className="container d-flex justify-content-center">
            <div>
                    <div className="card text-center mb-5">
                        <div className="card-body" key={id}>
                            <div className="image-container">
                                <img className="rounded-circle person-image" src={image} alt="person" />
                                <span className="quote-icon"><FaQuoteRight /></span>
                            </div>
                            <p className="mt-3">{name}</p>
                            <h4 className="text-info">{job.toUpperCase()}</h4>
                            <p>{text}</p>
                        </div>
                        <div className="buttons d-flex justify-content-center">
                            <button onClick={subIndex} className="btn text-primary">
                                <FaChevronLeft />
                            </button>
                            <button onClick={addIndex} className="btn text-primary">
                                <FaChevronRight />
                            </button>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button onClick={randomNumber} className="btn btn-info mt-2">Surprise me</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}