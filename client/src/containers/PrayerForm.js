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
    this.props.createPrayer(this.props.prayerForm)
    this.props.history.push('/')
    // const { createPrayer, prayerForm } = this.props;
		// createPrayer(prayerForm);
  }

  render() {

    // const { duration, focus, summary } = this.props.prayerForm;
    // value={summary}
    // value={duration}
    // value={focus}
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

            placeholder="Write down the summary of your prayer"
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

            placeholder="How long was your prayer in minutes?"
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

            placeholder="Out of 5, how would you rate your focus level?"
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
