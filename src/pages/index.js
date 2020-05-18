import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import moo from '../assets/images/deltaepsilonmoo.png'
import Header from '../components/Header'
import Layout from '../components/layout'
import data from '../assets/items.json'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
      isChecked: false,
      score: 0,
      showScore: false
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  handleCheck = () => {
    this.setState(() => ({
      isChecked: true,
      score: this.state.score + 1
    }))
  }

  handleSubmit = () => {
    this.setState(() => ({ showScore: true }))
  }

  render() {
    const items = data.ListItems;
    return (
      <Layout>
        <Helmet title="The LDFS Score Test | Delta Epsilon Mu, Inc." />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>The LDFS Score Test
                  </h2>
                </header>
                <ul className="actions">
                  { items.map((item, i) => (
                    <li key={i} isChecked={this.state.isChecked}>
                      <input type="checkbox" onClick={this.handleCheck}/>
                      { item }
                    </li>
                  )) }
                </ul>
              </div>
              <span className="image">
                <img src={moo} alt="deltaepsilonmoo" />
              </span>
            </div>
            <button>Calculate My LDFS Score! (๑˃ᴗ˂)ﻭ</button>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
