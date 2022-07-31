import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/publicRoutes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import PrivateRoute from './authentication/PrivateRoute';
import { privateRoutes } from './routes/privateRoutes';
import AdminRoute from './authentication/AdminRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddAdmin from './Pages/Dashboard/AddAdmin';
import AddService from './Pages/Dashboard/AddService';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Navbar>

        <Routes>
          {
            publicRoutes.map(({ path, Component }, index) =>
              <Route key={index} path={path} element={<Component />}></Route>)
          }
          {/* <Route path="/services" element={<PrivateRoute>
            <Services />
          </PrivateRoute>}>
          </Route>
          <Route path="/about" element={<PrivateRoute>
            <About />
          </PrivateRoute>}>
          </Route> */}

          <Route element={<PrivateRoute />}>
            {/* <Route path="/about" element={<About/>}></Route>
            <Route path="/services" element={<Services/>}></Route> */}

            {
              privateRoutes.map(({ path, Component }, index) =>
                <Route key={index} path={path} element={<Component />}></Route>)
            }
          </Route>

          <Route element={<AdminRoute />}>
            <Route path='/dashboard' element={<Dashboard />}>
              <Route path='addAdmin' element={<AddAdmin />}></Route>
              <Route path='addService' element={<AddService />}></Route>
            </Route>
          </Route>
        </Routes>

      </Navbar>
    </>
  );
}

export default App;
