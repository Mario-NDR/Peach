/**
 * @summary 活动管理
 */
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { IntlComponent } from 'Components/Common'
import Error from 'Containers/Error'

import Overview from './Overview'
import Create from './Create'
import Mine from './Mine'
import PrizeLibrary from './PrizeLibrary'
import Approve from './Approve'
import Lotus from './Approve/Lotus'
import Settings from './Settings'
import SignUpDetails from './Approve/SignUp/SignUpDetails'
import VotingDetails from './Approve/Voting/VotingDetails'
import QuizActivitiesDetails from './Approve/QuizActivities/QuizActivitiesDetails'
import LuckyDrawDetails from './Approve/LuckyDraw/LuckyDrawDetails'

class Activity extends IntlComponent {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Switch>
        <Route path="/app/activity/overview" component={Overview} exact />
        <Route path="/app/activity/create" component={Create} />
        <Route path="/app/activity/mime" component={Mine} exact />
        <Route path="/app/activity/prizeLibrary" component={PrizeLibrary} />
        <Route path="/app/activity/approve" component={Approve} exact />
        <Route path="/app/activity/approve/lotus" component={Lotus} exact />
        <Route path="/app/activity/approve/signUp/details" component={SignUpDetails} />
        <Route path="/app/activity/approve/vote/details" component={VotingDetails} />
        <Route path="/app/activity/approve/quiz/details" component={QuizActivitiesDetails} />
        <Route path="/app/activity/approve/luckyDraw/details" component={LuckyDrawDetails} />
        <Route path="/app/activity/settings" component={Settings} exact />
        <Route component={Error} />
      </Switch>
    )
  }
}

export default Activity
