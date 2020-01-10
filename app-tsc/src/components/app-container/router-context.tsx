import React from "react";

const RouterContext = React.createContext({match: null, location: null, history: null});

export default RouterContext;