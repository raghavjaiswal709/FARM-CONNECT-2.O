import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import LandingPage from "./Pages/LandingPage/LandingPage";
import LandingPageRegister from "./Pages/LandingPageReginster/LandingPageRegister";
import LoginPageForFarmer from "../src/Pages/Auth/login/LoginPageForFarmer/LoginPageForFarmer.jsx";
import LoginPageForWholeseller from "../src/Pages/Auth/login/LoginPageForWholeseller/LoginPageForWholeseller";
import RegisterPageForFarmer from "./Pages/ReginsterPage/RegisterPageForFarmer/RegisterPageForFarmer";
import RegisterPageForWholeseller from "./Pages/ReginsterPage/RegisterPageForWholeseller/RegisterPageForWholeseller";
import FarmerDashboard1 from "./Pages/dashboard/farmers/FarmerDashboard/FarmerDashboard.jsx";
import AddProductByFarmer from "./Pages/AddProductByFarmer/AddProductByFarmer";
import { Toaster } from "react-hot-toast";
import DisplayProductsForFarmer from "./Pages/dashboard/farmers/FarmerDashboard/DisplayProductsForFarmer/DisplayProductsForFarmer2.jsx";
import PrivateRoute, { RoleBasedRoute, RoleBasedRoutewholeseller } from "./components/Layout/routes/private";
import WholesellerDashboard from "./Pages/dashboard/wholesellers/WholesellerDashboard/WholesellerDashboard.jsx";
import WholesellerRoute from "./components/Layout/routes/WholeSellerRoute.js";
import AfterLoginPageCommon from "./Pages/AfterLoginPageCommon/AfterLoginPageCommon.jsx";
import ManageCategory from "./Pages/ManageCategory/ManageCategory.jsx";
import ViewProducts from "./Pages/ViewProducts/ViewProducts.jsx";
import UpdateProductFarmer from "./Pages/UpdateProductFarmer/UpdateProductFarmer.jsx";
import BoughtProducts from "./Pages/BoughtProducts/BoughtProducts.jsx";
import SearchProducts from "./Pages/SearchProducts/SearchProducts.jsx";
import ProductDetails from "./Pages/ProductDetails/ProductDetails.jsx";
import CartPage from "./Pages/dashboard/wholesellers/cart/CartPage.jsx";
import UpdatePeofileW from "./Pages/UpdatePeofileW/UpdatePeofileW.jsx";
import ProfileUpdateFarmer from "./Pages/ProfileUpdateFarmer/ProfileUpdateFarmer.jsx";
import HomepageForWholeseller from "./Pages/dashboard/farmers/FarmerDashboard/HomepageForWholeseller/HomepageForWholeseller.jsx";
import ViewAcceptedProducts from "./Pages/ViewAcceptedProducts/ViewAcceptedProducts.jsx";
import BargainRes from "./components/Layout/bargainRes/BargainRes.jsx";
import ProductList from "./Pages/bargainRespondpage/ProductList.jsx";
import BargainAction from "./Pages/bargainACTIONFarmer/BargainAction.jsx";
import RequestedProducts from "./Pages/WholesellerBargainStatus/WholesellerBargainStatus.jsx";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/LandingPageRegister" element={<LandingPageRegister />} />
          <Route path="/LoginPageForFarmer" element={<LoginPageForFarmer />} />
          <Route path="/LoginPageForWholeseller" element={<LoginPageForWholeseller />} />
          <Route path="/RegisterPageForFarmer" element={<RegisterPageForFarmer />} />
          <Route path="/RegisterPageForWholeseller" element={<RegisterPageForWholeseller />} />

          {/* Role-Based Routes */}
          <Route element={<RoleBasedRoute />}>
            <Route path="/HomePage" element={<AfterLoginPageCommon />} />
          </Route>

          <Route element={<RoleBasedRoutewholeseller />}>
            <Route path="/HomepageWholeseller" element={<HomepageForWholeseller />} />
          </Route>

          {/* Private Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/search" element={<SearchProducts />} />
            <Route path="/Dashboard/FarmerDashboard1" element={<FarmerDashboard1 />} />
            <Route path="/AddNewProductFarmer" element={<AddProductByFarmer />} />
            <Route path="/Dashboard/AddNewProductFarmer" element={<AddProductByFarmer />} />
            <Route path="/DisplayProductsForFarmer" element={<DisplayProductsForFarmer />} />
            <Route path="/Dashboard/FarmerDashboard1/viewProducts" element={<ViewProducts />} />
            <Route path="/Dashboard" element={<WholesellerDashboard />} />
            <Route path="/bargainRes" element={<BargainRes />} />
            <Route path="/bargainResfake" element={<ProductList />} />
            <Route path="/bargainAction" element={<BargainAction />} />
            <Route path="/ManageCategory" element={<ManageCategory />} />
            <Route path="/Dashboard/BargainStatus" element={<RequestedProducts />} />
            <Route path="/updateProduct/:slug" element={<UpdateProductFarmer />} />
            <Route path="/Dashboard/BoughtProductss" element={<BoughtProducts />} />
            <Route path="/HomepageWholeseller/product/:slug" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/Dashboard/UpdateProfile" element={<UpdatePeofileW />} />
            <Route path="/Dashboard/UpdateProfileFarmer" element={<ProfileUpdateFarmer />} />
            <Route path="/Dashboard/agreedProducts" element={<ViewAcceptedProducts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
