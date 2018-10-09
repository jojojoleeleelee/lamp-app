import React from 'react';
import { connect } from 'react-redux';
import VerseCard from '../components/VerseCard';
import { loadVerses } from '../actions/verses';

class MyVerses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      currentlyDisplayed: this.props.verses
    }
  }

  onInputChange = (event) => {
    let newlyDisplayed = this.props.verses.filter(verse => verse.text.includes(event.target.value.toLowerCase()))

    this.setState({
      searchTerm: event.target.value,
      currentlyDisplayed: newlyDisplayed
    })
  }

  renderVerses() {
    return this.state.currentlyDisplayed.map((verse) => {
      return(
        <VerseCard key={verse.id} index={verse.id} verse={verse} />
      )
    })
  }

  componentDidMount() {
    this.props.loadVerses()
  }

  render() {
    return (
      <div>
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.onInputChange}
        />
      </form>
      { this.props.verses !== [] ? this.renderVerses() : [] }
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    verses: state.verses
  }
}

export default connect(mapStateToProps, {
  loadVerses
})(MyVerses)
