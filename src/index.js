import * as React from "react"
import { connect } from "react-redux"

const defaultMapStateToProps = state => ({ state })
const defaultMapDispatchToProps = dispatch => ({ dispatch })

export class WithReduxComponent extends React.Component{
  componentDidMount() {
    const { onMountDispatch, dispatch } = this.props

    return onMountDispatch && dispatch(onMountDispatch())
  }
  render() {
    const { state, dispatch, children } = this.props

    return children(state, dispatch)
  }
}


const WithRedux = connect(defaultMapStateToProps, defaultMapDispatchToProps)(WithReduxComponent)

WithRedux.propTypes = { };

WithRedux.defaultProps = {
}

export default WithRedux


