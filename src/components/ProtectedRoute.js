import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component}) {
  const isAuthenticated = localStorage.getItem("accessToken");
  console.log("this", isAuthenticated);

  return (
    // <Route
      
    //   render={() =>
    //     isAuthenticated ? <Component/> : <Redirect to="/" />
    //   }
    // />
    <Route path='/profile'>
        {isAuthenticated ? <Component/> : <Redirect to='/'/>}
    </Route>
  );
}

export default ProtectedRoute;