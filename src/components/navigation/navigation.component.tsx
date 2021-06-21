import React from "react";
import {
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import InfiniteScrollBulkData from "../infinite-scroll/vertical-infinite-scroll.component";
import InfiniteScroll from "../infinite-scroll/infinite-scroll-with-api.component";

const Navigation = () => {
  return (
    <div>
      <h1>Infinite Scroll</h1>
      <ul className="header">
        <li>
          <NavLink exact to="/">
            Without Api
          </NavLink>
        </li>
        <li>
          <NavLink to="/infinite-scroll-pagination">With Api</NavLink>
        </li>
      </ul>
      <div className="content">
        <Switch>
          <Route exact path="/" component={InfiniteScrollBulkData} />
          <Route
            path="/infinite-scroll-pagination"
            component={InfiniteScroll}
          />
        </Switch>
      </div>
    </div>
  );
};

export default Navigation;
