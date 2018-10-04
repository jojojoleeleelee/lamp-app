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
    const { createPrayer, prayerForm } = this.props;
		createPrayer(prayerForm);
  }

  render() {
    // const { duration, focus, summary } = this.props.prayerForm;

    return (
      <div className="center-align">
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
            value={this.props.prayerForm}
          />
        </div>
        <br />
        <br />
        <div>
          <label htmlFor="duration">Duration (in minutes):</label>
          <textarea
            type="text"
            onChange={this.handleOnChange}
            name="duration"
            value={this.props.prayerForm}
          />
        </div>
        <br />
        <br />
        <div>
          <label htmlFor="focus">Focus Level (out of 5):</label>
          <input
            type="text"
            onChange={this.handleOnChange}
            name="focus"
            value={this.props.prayerForm}
          />
          <br />
          <br />
          <br />
          <button className="waves-effect waves-light btn" type='submit'>Add Prayer</button>
          <br />
          <br />
          <br />
          <br />
          <br />
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
