import { Route, Routes } from "react-router-dom";
import {
  Home,
  About,
  Van,
  VanDetails,
  Host,
  Reviews,
  Income,
  HostVans,
  HostVanDetail,
  HostVanPhoto,
  HostVanPrice,
  HostVanInfo,
  PageNotFound,
  Login,
} from "./pages";
import { SharedLyout, HostLayout } from "./components";
import "../server";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLyout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="van" element={<Van />} />
          <Route path="van/:id" element={<VanDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Host />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="price" element={<HostVanPrice />} />
              <Route path="photo" element={<HostVanPhoto />} />
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
