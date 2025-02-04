import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import LandingPage from "./Pages/common/LandingPage/LandingPage.jsx";
import LandingPageRegister from "../src/Pages/Auth/register/LandingPageReginster/LandingPageRegister.jsx";
import LoginPageForFarmer from "../src/Pages/Auth/login/LoginPageForFarmer/LoginPageForFarmer.jsx";
import LoginPageForWholeseller from "../src/Pages/Auth/login/LoginPageForWholeseller/LoginPageForWholeseller";
import RegisterPageForFarmer from "./Pages/Auth/register/RegisterPageForFarmer/RegisterPageForFarmer.jsx";
import RegisterPageForWholeseller from "../src/Pages/Auth/register/RegisterPageForWholeseller/RegisterPageForWholeseller.jsx";
import FarmerDashboard1 from "./Pages/dashboard/farmers/FarmerDashboard/FarmerDashboard.jsx";
import AddProductByFarmer from "../src/Pages/dashboard/farmers/FarmerDashboard/AddProductByFarmer/AddProductByFarmer.jsx";
import { Toaster } from "react-hot-toast";
import DisplayProductsForFarmer from "./Pages/dashboard/farmers/FarmerDashboard/DisplayProductsForFarmer/DisplayProductsForFarmer2.jsx";
import PrivateRoute, { RoleBasedRoute, RoleBasedRoutewholeseller } from "./components/Layout/routes/private";
import WholesellerDashboard from "./Pages/dashboard/wholesellers/WholesellerDashboard/WholesellerDashboard.jsx";
import WholesellerRoute from "./components/Layout/routes/WholeSellerRoute.js";
import AfterLoginPageCommon from "./Pages/common/AfterLoginPageCommon/AfterLoginPageCommon.jsx";
import ManageCategory from "./Pages/dashboard/admin/ManageCategory/ManageCategory.jsx";
import ViewProducts from "./Pages/dashboard/farmers/FarmerDashboard/ViewProducts/ViewProducts.jsx";
import UpdateProductFarmer from "./Pages/dashboard/farmers/FarmerDashboard/UpdateProductFarmer/UpdateProductFarmer.jsx";
import BoughtProducts from "./Pages/dashboard/wholesellers/WholesellerDashboard/BoughtProducts/BoughtProducts.jsx";
import SearchProducts from "./Pages/common/SearchProducts/SearchProducts.jsx";
import ProductDetails from "./Pages/common/ProductDetails/ProductDetails.jsx";
import CartPage from "./Pages/dashboard/wholesellers/cart/CartPage.jsx";
import UpdatePeofile from "./Pages/common/UpdatePeofile/UpdatePeofile.jsx";
import ProfileUpdateFarmer from "./Pages/common/ProfileUpdateFarmer/ProfileUpdateFarmer.jsx";
import HomepageForWholeseller from "./Pages/dashboard/farmers/FarmerDashboard/HomepageForWholeseller/HomepageForWholeseller.jsx";
import ViewAcceptedProducts from "./Pages/dashboard/farmers/FarmerDashboard/ViewAcceptedProducts/ViewAcceptedProducts.jsx";
import BargainRes from "./components/Layout/bargainRes/BargainRes.jsx";
import ProductList from "./Pages/dashboard/farmers/FarmerDashboard/bargainRespondpage/ProductList.jsx";
import BargainAction from "../src/Pages/dashboard/farmers/FarmerDashboard/bargainACTIONFarmer/BargainAction.jsx";
import RequestedProducts from "./Pages/dashboard/wholesellers/WholesellerDashboard/WholesellerBargainStatus/WholesellerBargainStatus.jsx";

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
            <Route path="/Dashboard/UpdateProfile" element={<UpdatePeofile />} />
            <Route path="/Dashboard/UpdateProfileFarmer" element={<ProfileUpdateFarmer />} />
            <Route path="/Dashboard/agreedProducts" element={<ViewAcceptedProducts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
