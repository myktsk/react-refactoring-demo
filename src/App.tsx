import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { InvitedMembersPage } from './pages/InvitedMembersPage';
import { JoinedMembersPage } from './pages/JoinedMembersPage';


function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/invitations">招待メンバー一覧</Link>
          </li>
          <li>
            <Link to="/members">参加メンバー一覧</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/invitations" component={InvitedMembersPage} />
        <Route path="/members" component={JoinedMembersPage} />
      </Switch>
    </Router>
  );
}

export default App;
