/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';

import 'redux-notifications/lib/styles.css';

import Header from '../../components/header';
import saga from './saga';

function mapStateToProps(state) {
  return { message: state.get('list').get('message') };
}

function mapDispatchToProps(dispatch) {
  return {
    databaseWrite: item => {
      dispatch({ type: 'DATABASE_WRITE', payload: item });
    },
  };
}

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  static propTypes = {
    databaseWrite: PropTypes.func.isRequired,
    message: PropTypes.string,
  };

  componentWillMount() {
    this.setState({ itemToAdd: '' });
  }

  render() {
    return (
      <div>
        <Header />
        Add string to list
        <div>{this.props.message}</div>
        <input
          type="text"
          onChange={
            // set itemToAdd
            evt => this.setState({ itemToAdd: evt.target.value })
          }
        />
        <br />
        <button
          type="submit"
          onClick={
            // add itemToAdd to redux
            () => {
              this.props.databaseWrite(this.state.itemToAdd);
            }
          }
        >
          Add item
        </button>
      </div>
    );
  }
}

const HomePageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);

const withSaga = injectSaga({ key: 'HomePage', saga });

export default compose(withSaga)(HomePageConnect);
