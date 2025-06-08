import signIn from "../assets/sign-in.png";

function SignIn() {
  return (
    <button className="btn btn-edit-item">
      <img src={signIn} width="36" alt="Sign In"></img>
    </button>
  );
}

export default SignIn;
