import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Trips from "../components/Trips";
import UserLogin from "../components/UserLogin";
import UserRegistration from "../components/UserRegistration";
import ROUTES from "./routesModel";
import TripDetail from "../components/TripDetail";
import UpdateTrupForm from "../components/UpdateTrupForm";

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.LOGIN} element={<UserLogin />} />
            <Route path={ROUTES.REGISTER} element={<UserRegistration />} />
            <Route path={ROUTES.TRIPS} element={<Trips />} />
            <Route path={ROUTES.TRIP_DETAILS} element={<TripDetail/>} />
            <Route path={ROUTES.UPDATE} element={<UpdateTrupForm/>} />
            <Route path={ROUTES.DEFAULT} element={<h1>404 Not Found</h1>} />
        </Routes>
    );
};

export default Router;