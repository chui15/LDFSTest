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

  handleCheck = (e) => {
    if (this.state.showScore) {
      e.preventDefault();
    } else {
      this.setState(() => ({
        isChecked: true,
        score: this.state.score + 1
      }))
    }
  }

  handleSubmit = () => {
    this.setState(() => ({ showScore: true }))
  }

  render() {
    const items = data.ListItems;
    let total = this.state.score;
    let score = this.state.showScore ? <h2>Your LDFS Score is: { total }/60</h2> : null;
    let scoreMessage;
    if (total > 50 && total <= 60) {
      scoreMessage = "You truly have Big LDFS Energy. Props to you for being so active in DEM, you're awesome and ily	(´• ω •`)ﾉ"
    } else if (total > 40 && total <= 50) {
      scoreMessage = "Hmm not bad, you're pretty involved in DEM and do embody the LDFS spirit. However, there's still room for improvement ٩(｡•́‿•̀｡)۶"
    } else if (total > 30 && total <= 40) {
      scoreMessage = "I'd say you're about average in terms of LDFS spirit and activeness.  Is that really all you got?? (｡•́︿•̀｡)"
    } else if (total > 20 && total <= 30) {
      scoreMessage = "In terms of this test you are not the best but also not necessarily the worst but also not neccessarily good either.  It's like you put the L and S in LDFS but as in Low Score, eet ees what eet ees ¯\_(ツ)_/¯"
    } else if (total > 10 && total <=20) {
      scoreMessage = "You just barely made the cut.  Slightly above being totally MIA but also c'mon where's your LDFS?? o(TヘTo)"
    } else {
      scoreMessage = "It looks like someone's been MIA... pls explain yourself ლ(ಠ_ಠ ლ)";
    }
    let message = this.state.showScore ? <p>{ scoreMessage }</p> : null;
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
                <img src={ moo } alt="deltaepsilonmoo" />
              </span>
            </div>
            <button onClick={this.handleSubmit}>Calculate My LDFS Score! (๑˃ᴗ˂)ﻭ</button>

            { score }
            { message }
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
