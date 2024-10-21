import Verifyotp from "../Component/auth/Verifyotp";

const apis = () => {
  const local = 'http://localhost:5000/';

  const list = {
    registerUser: `${local}user/register`,
    loginUser: `${local}user/login`,
    forgetpasswoard: `${local}user/forgotPassword`,
    verifyotp: `${local}user/verifyOtp`
  };

  return list;
};

export default apis;
