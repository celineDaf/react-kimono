import { useContext } from "react";
import RouterContext from './router-context';

function useRouteProps() {
  const routeProps = useContext(RouterContext);
  return [routeProps.match, routeProps.location, routeProps.history];
}

export default useRouteProps;