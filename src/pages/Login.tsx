import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/auth.Api";
import { useAppDispatch } from "../redux/hook";
import { setUser, TUser } from "../redux/features/auth/auth.slicer";
import { verifyToken } from "../utils/Verify.token";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();
  const [login, { error }] = useLoginMutation();

  // ! for login
  const handleLogin = async (data: FieldValues) => {
    const toastId = toast.loading("Signing in ");

    try {
      const loginData = {
        id: data.userId,
        password: data.password,
      };

      const response = await login(loginData).unwrap();

      console.log(response);

      const user = verifyToken(response.data.accessToken) as TUser;

      dispatch(setUser({ user: user, token: response.data.accessToken }));

      toast.success("Logged in ", { id: toastId, duration: 2000 });

      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast.error("Something went wrong !! ", { id: toastId, duration: 2000 });
    }
  };

  if (error) {
    console.log(error);
  }

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div>
        <label htmlFor="id">ID: </label>
        <input type="text" id="id" {...register("userId")} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
