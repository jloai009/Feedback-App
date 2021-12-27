import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const handleGood = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }
  const handleOk = () => {
    store.dispatch({
      type: 'OK'
    })
  }
  const handleBad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }
  const handleZero = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

  const good = store.getState().good
  const ok = store.getState().ok
  const bad = store.getState().bad
  const totalCount = good + ok + bad

  return (
    <div>
      <div>
        <h1>How would you rate your experience?</h1>
        <button onClick={handleGood}>Good</button>&ensp;
        <button onClick={handleOk}>Okay</button>&ensp;
        <button onClick={handleBad}>Bad</button>&ensp;
        <button onClick={handleZero}>Reset Stats</button>
      </div>
      <div>
        <h2>Feedback Statistics</h2>
        {good || ok || bad ?
          <div>
            <table>
              <tbody>
                <tr>
                  <td>Good:&emsp;</td>
                  <td>{good}</td>
                </tr>
                <tr>
                  <td>Okay:&emsp;</td>
                  <td>{ok}</td>
                </tr>
                <tr>
                  <td>Bad:&emsp;</td>
                  <td>{bad}</td>
                </tr>
                <tr>
                  <td>Total Feedback Count:&emsp;</td>
                  <td>{totalCount}</td>
                </tr>
                <tr>
                  <td>Percentage Positive:&emsp;</td>
                  <td>{ ((good+ok)/(totalCount)*100).toFixed(1) }%</td>
                </tr>
              </tbody>
            </table>
          </div> :
          <div>
            <p>No feedback has been recorded yet</p>
          </div>
        }
      </div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
