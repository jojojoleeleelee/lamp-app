import React from 'react';
import { connect } from 'react-redux'
import { deletePrayer } from '../actions/prayers'

class DeleteButton extends React.Component {

  handleDelete = () => {
    console.log(this)
    this.props.deletePrayer(this.props.prayer.id)
  }
  render() {
    return (
      <div>
          <br />
          <btn className="waves-effect waves-light btn" onClick={this.handleDelete} id="memorize">D E L E T E</btn>
      </div>
    )
  }
}

const mapStateToProps = state => {
  prayer: state.prayers
}


export default connect(mapStateToProps, {
  deletePrayer
})(DeleteButton)
