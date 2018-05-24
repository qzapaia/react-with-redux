import React from 'react';
import WithRedux from './'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const reducer = (state, action)=>{
  console.log(action);
  return {things:[1,2,3]}
}
const store = createStore(reducer)

// displayName will be the title of the story
export const displayName = 'WithRedux';

export const firstStory = {
  title: 'WithRedux First Story',
  story: ({ action }) => () => (
    <Provider store={store}>
      <WithRedux>
        {(state, dispatch) => (
          state.things.map(t => (
            <div>
              <a onClick={()=>dispatch({type:t})}> {t} </a>
            </div>
          ))
        )}
      </WithRedux>
    </Provider>
  )
};
