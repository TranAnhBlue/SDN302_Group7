// src/pages/AuthCallback.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";

const AuthCallback = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const id = params.get("id");
    const email = params.get("email");
    const role = params.get("role");

    if (token) {
      dispatch(setCredentials({
        user: { id, email, role },
        token,
      }));
      navigate("/");
    } else {
      navigate("/signin?error=GoogleLoginFailed");
    }
  }, [dispatch, navigate]);

  return <p>Đang đăng nhập bằng Google...</p>;
};

export default AuthCallback;
