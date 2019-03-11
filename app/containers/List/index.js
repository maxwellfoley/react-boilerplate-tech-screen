import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import _ from 'lodash';
import injectSaga from 'utils/injectSaga';
import Header from '../../components/header';

import { selectItemsJS } from './selectors';
import saga from './saga';

function mapStateToProps(state) {
  return {
    items: selectItemsJS(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    databaseRead: () => dispatch({ type: 'DATABASE_READ' }),
  };
}

class List extends React.PureComponent {
  componentDidMount() {
    this.props.databaseRead();
  }

  static propTypes = {
    databaseRead: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div>
        <Header />
        {_.map(this.props.items, obj => {
          if (obj) {
            return <div>{String(obj.item)}</div>;
          }
          return <div />;
        })}
      </div>
    );
  }
}

const ListConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

const withSaga = injectSaga({ key: 'List', saga });

export default compose(withSaga)(ListConnect);
