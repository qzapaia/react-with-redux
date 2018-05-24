### Use

```js
import WithRedux from 'react-with-redux';
import {pullThings,selectThing} from 'actions';

export default () => (
  <WithRedux onMountDispatch={pullThings}>
    {(state,dispatch)=>(
        state.things.map(t => (
          <a onClick={() => dispatch(selectThing(t.id))}> {t.name} </a>
        ))
    )}
  </WithRedux>
)
```

### Props

#### onMountDispatch&lt;Function&gt;

An action creator to be dispatched onDidMount