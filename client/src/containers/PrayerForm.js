import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePrayerForm } from '../actions/prayers';
import { createPrayer } from '../actions/prayers';
import FormError from '../components/FormError';

class PrayerForm extends Component {

  handleOnChange = event => {
    const {name, value} = event.target;
    const currentPrayerForm = Object.assign({}, this.props.prayerForm, {
      [name]: value
    })
    this.props.updatePrayerForm(currentPrayerForm)
  }

  handleOnSubmit = e => {
    e.preventDefault();
    const { createPrayer, prayerForm, history} = this.props;
		createPrayer(prayerForm, history);
  }

  render() {
    // const { duration, focus, summary } = this.props.prayerForm;

    return (
      <div>
        <h1 className="prayerName">A D D  *  P R A Y E R</h1>
        {this.props.errors === true ? <FormError/> : null}
        <br />
        <br />
      <form onSubmit={this.handleOnSubmit}>
        <div>
          <label htmlFor="summary">Summary:</label>
          <input
            type="text"
            onChange={this.handleOnChange}
          />
        </div>
        <br />
        <br />
        <div>
          <label htmlFor="duration">Duration:</label>
          <textarea
            type="text"
            onChange={this.handleOnChange}
            name="duration"
          />
        </div>
        <br />
        <br />
        <div>
          <label htmlFor="focus">Focus Level:</label>
          <input
            type="text"
            onChange={this.handleOnChange}
            name="focus"
          />
          <br />
          <br />
          <br />
          <btn className="waves-effect waves-light btn">Add Prayer</btn>
        </div>
      </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    prayerForm: state.prayerForm,
    errors: state.errors
  }
}

export default connect(mapStateToProps, {
  updatePrayerForm,
  createPrayer
})(PrayerForm);
