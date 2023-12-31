import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Trips from "../components/Trips/Trips";
import ROUTES from "./routesModel";
import TripDetails from "../components/TripDetails/TripDetails";
import UpdateTripForm from "../components/UpdateTripForm/UpdateTripForm";
import NewTripForm from "../components/NewTripForm/NewTripForm";
import Auth from "../components/Auth/Auth";

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.LOGIN} element={<Auth isLogin={true}/>} />
            <Route path={ROUTES.REGISTER} element={<Auth isLogin={false} />} />
            <Route path={ROUTES.TRIPS} element={<Trips />} />
            <Route path={ROUTES.TRIP_DETAILS} element={<TripDetails/>} />
            <Route path={ROUTES.UPDATE} element={<UpdateTripForm/>} />
            <Route path={ROUTES.CREATE} element={<NewTripForm/>} />
            <Route path={ROUTES.DEFAULT} element={<h1>404 Not Found</h1>} />
        </Routes>
    );
};

export default Router;