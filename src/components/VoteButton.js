const VoteButton = ({currentAnecdote, votes, setVotes, setMostVoted}) => {

    const handleClick = () => {
        const newVotes = votes.map((e, i) => i === currentAnecdote ? e + 1 : e)
        let max = 0;
        let index;

        newVotes.forEach((e, i) => {
            if (e > max) {
                max = e;
                index = i;
            }
        })

        setVotes(newVotes);
        setMostVoted(index);
    }

    return (
        <button onClick={handleClick}>Vote</button>
    )
}

export default VoteButton;