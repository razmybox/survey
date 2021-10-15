import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import InfoSec from "./components/InfoSec";
import Approval from "./components/Questionaire/Approval";
import Form from "./components/Questionaire/Form";
import ProcessFee from "./components/Questionaire/ProcessFee";
import Questionnaire from "./components/Questionaire/Questionnaire";
import Spinner from "./components/Questionaire/Spinner";
import Thankpage from "./components/Questionaire/Thankpage";
import Signin from "./SignSignup/Signin";
import Signup from "./SignSignup/Signup";

function App() {
  return (
    <Router>
         <Header />
      <Switch>
     
        <Route exact path="/">
          <InfoSec />
          <Card />
          <Footer />
        </Route>

        <Route path="/signup">
          <ToastContainer position="top-center" />

          <Signup />
        </Route>

        <Route path="/signin">
          <ToastContainer position="top-center" />

          <Signin />
        </Route>

        <Route path="/personalinformation">
          <Questionnaire />
        </Route>

        <Route path="/individual-information">
          <Form />
        </Route>

        <Route path="/confirmation">
          <Spinner />
        </Route>

        <Route path="/approval-page">
          <Approval />
        </Route>

        <Route path="/processing-fee">
          <ProcessFee />
        </Route>

        <Route path="/final-page">
          <Thankpage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
