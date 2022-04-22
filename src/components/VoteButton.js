import {logDOM} from "@testing-library/react";

const VoteButton = ({currentAnecdote, votes, setVotes}) => {

    const handleClick = () => {
        const newVotes = votes.map((e, i) => i === currentAnecdote ? e + 1 : e)

        setVotes(newVotes)
    }

    return (
        <button onClick={handleClick}>Vote</button>
    )
}

export default VoteButton;