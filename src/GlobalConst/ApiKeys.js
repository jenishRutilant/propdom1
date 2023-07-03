const BASE_URL = "http://localhost:5000/";

// const GET = "get";
// const POST = "post";
// const PATCH = "Patch";
// const REMOVE = "Delete";

const apiConst = {
  send_otp_to_user_register: `${BASE_URL}user/send_otp_to_user`,
  signup: `${BASE_URL}user/signup`,
  login: `${BASE_URL}user/login`,
  send_otp_login: `${BASE_URL}user/send_otp_to_user_for_login`,
  add_complain: `${BASE_URL}complain/add`,
};

export default apiConst;
