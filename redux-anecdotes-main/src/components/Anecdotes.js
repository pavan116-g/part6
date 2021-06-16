import React from 'react'
import { connect } from 'react-redux'
import { voteOnAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import Anecdote from './Anecdote'

const Anecdotes = (props) => {

  const voteAndNotify = (anecdote) => {
    const durationOfMessage = 5000 //5 Seconds
    const message = 'You voted on "' + anecdote.content + '"'
    props.voteOnAnecdote(anecdote)
    props.setNotification(message, durationOfMessage)
  }
  
  return(
      <ul>
        {props.anecdotes.map(anecdote =>
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleClick={() => 
              voteAndNotify(anecdote)}
          />
        )}
      </ul>
  )
}

const mapStateToProps = (state) => {
  if (state.filter === '') {
    return {
      anecdotes: state.anecdotes
    }
    } else {
    return {
      anecdotes: state.anecdotes.filter(anecdote => anecdote.content.toLowerCase()
                                                    .includes(state.filter.toLowerCase()))
    }
  }
}

const mapDispatchToProps = {
  voteOnAnecdote,
  setNotification
}
const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps
  )(Anecdotes)

export default ConnectedAnecdotes