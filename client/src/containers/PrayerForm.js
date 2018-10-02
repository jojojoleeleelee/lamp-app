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
    const { name, ingredients, directions, cook_time } = this.props.prayerForm;

    return (
      <div>
        <h1 className="prayerName">Create a New Prayer</h1>
        {this.props.errors === true ? <FormError/> : null}

      <form onSubmit={this.handleOnSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            onChange={this.handleOnChange}
            name="name"
            value={name}
          />
        </div>

        <div>
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea
            type="text"
            onChange={this.handleOnChange}
            name="ingredients"
            value={ingredients}
          />
        </div>

        <div>
          <label htmlFor="directions">Directions:</label>
          <textarea
            type="text"
            onChange={this.handleOnChange}
            name="directions"
            value={directions}
          />
        </div>

        <div>
          <label htmlFor="cook_time">Cook Time:</label>
          <input
            type="text"
            onChange={this.handleOnChange}
            name="cook_time"
            value={cook_time}
          />

          <button type="submit">Add Prayer</button>
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
