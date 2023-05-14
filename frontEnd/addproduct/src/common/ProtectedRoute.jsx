/* import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext} from "react";


const ProtectedRoute = ({ children}) => {
  const {currentUser} = useContext(AuthContext);

  console.log(currentUser);
  if (currentUser) {
    return <Navigate to="/mainPage" />;
  }


  return children
  
};

export default ProtectedRoute; */