const MostVotedAnecdote = ({anecdotes, mostVoted}) => {

    return (
        <div>
            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[mostVoted]}</p>
        </div>
    )
}

export default MostVotedAnecdote;