const RandomButton = ({anecdotes, setValue}) => {

    const setRandomInt = () => {
        const randomInt = Math.floor(Math.random() * anecdotes.length)

        setValue(randomInt)
    }

    return (
        <button onClick={setRandomInt}>Randomize</button>
    )
}

export default RandomButton;