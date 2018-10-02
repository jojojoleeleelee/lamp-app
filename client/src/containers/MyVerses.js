import React from 'react';
import { connect } from 'react-redux';
import VerseCard from '../components/VerseCard';
import { loadVerses } from '../actions/verses';
import Suggestions from '../components/Suggestions'
import axios from 'axios'

const { API_KEY } = process.env
const API_URL = 'https://dbt.io/text/search?'

class MyVerses extends React.Component {

    state = {
        query: '',
        results: []
      }

      getSearch = () => {
        axios.get(`${API_URL}key=87fd47726ddef251ea71c94d14b958a0&dam_id=ENGESVN2&query=${this.state.search}&v=2`).then(({ data }) => {
          this.setState({
            results: data.data
          })
        })
      }

      handleInputChange = () => {
        this.setState({
          query: this.search.value
        }, () => {
          if (this.state.query && this.state.query.length > 1) {
            if (this.state.query.length % 2 === 0) {
              this.getSearch()
            }
          } else if (!this.state.query) {
          }
        })
      }

      render() {
        return (
          <form>
            <input
              placeholder="Search for..."
              ref={input => this.search = input}
              onChange={this.handleInputChange}
            />
          </form>
        )
      }
    }


export default MyVerses
