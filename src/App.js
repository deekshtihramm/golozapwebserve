import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Lazy loading components
const Business = lazy(() => import('./businessuser/businesslayout'));
const Bprofile = lazy(() => import('./businessuser/profile'));
const Upgrade = lazy(() => import('./businessuser/upgradepage'));
const EditProfile = lazy(() => import('./businessuser/profileedit'));
const Layout = lazy(() => import('./components/Layout'));
const Login = lazy(() => import('./components/LoginPage'));
const HomePage = lazy(() => import('./components/HomePage'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const ServicesPage = lazy(() => import('./components/ServicesPage'));
const AddServicesPage = lazy(() => import('./businessuser/AddServicesPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));
const SignUpPage = lazy(() => import('./components/SignUpPage'));
const ProfilePage = lazy(() => import('./components/ProfilePage'));
const Home = lazy(() => import('./components2/Home'));
const LoginLayout = lazy(() => import('./components/loginLayout1'));
const ViewAllPage = lazy(() => import('./components/Viewallpage'));
const Search = lazy(() => import('./businessuser/search'));
const ServiceDetails = lazy(() => import('./components/servicedetails.js'));
const Providerdetails = lazy(() => import('./components/providerdetails.js'));
const Sitemap = lazy(() => import('../public/sitemap.xml'));
// Shared Routes
const commonRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/view-all", element: <ViewAllPage /> },
  { path: "/search", element: <Search />},
  { path: "/service/:serviceName", element: <ServiceDetails />},
  { path: "/p/:pName", element: <Providerdetails />},
  { path: "/sitemap.xml", element: <Sitemap />},


];

function App() {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Retrieve userEmail from localStorage on app load
    const email = localStorage.getItem('userEmail') || '';
    setUserEmail(email);
  }, []);

  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        {/* Public Routes */}
        <Route path="/loginPage" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Default Route */}
        <Route
          path="/*"
          element={
            userEmail ? (
              <LoginLayout userEmail={userEmail} setUserEmail={setUserEmail}>
                <Routes>
                  {commonRoutes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element} />
                  ))}
                  <Route path="/lprofile" element={<ProfilePage />} />
                  <Route path="/lbHome" element={<Home />} />
                </Routes>
              </LoginLayout>
            ) : (
              <Layout userEmail={userEmail} setUserEmail={setUserEmail}>
                <Routes>
                  {commonRoutes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element} />
                  ))}
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/bHome" element={<Home />} />
                </Routes>
              </Layout>
            )
          }
        />

        {/* Business Model Route */}
        <Route
          path="/business/*"
          element={
            <Business userEmail={userEmail} setUserEmail={setUserEmail}>
              <Routes>
                {commonRoutes.map((route) => (
                  <Route key={route.path} path={route.path} element={route.element} />
                ))}
                <Route path="/profile" element={<Bprofile />} />
                <Route path="/upgradeplans" element={<Upgrade />} />
                <Route path="/addservices" element={<AddServicesPage />}/>
                <Route path="/profileedit" element={<EditProfile />} />
                <Route path="/home" element={<Home />} />
              </Routes>
            </Business>
          }
        />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to={userEmail ? "/" : "/loginPage"} />} />
      </Routes>
    </Suspense>
  );
}
export default App;

