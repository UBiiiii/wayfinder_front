import { useRouter } from "next/router";
import { useState } from "react";
import { auth, _auth } from "../config/firebase";

const Login = () => {

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const router = useRouter();

  const onSubmit = async () => {
    try{
      await _auth.signInWithEmailAndPassword(auth, email+"@map.com", pw);
      router.replace("/");
    } catch (err) {
      console.log(err);
    }
    
  }
  
  
  return (
    <div className="w-full h-full relative grid grid-cols-1 justify-center items-center">
      <div className="
        w-full h-[400px] text-center items-center flex justify-center
        font-bold text-8xl
      ">
        Map Manager
      </div>

      <div className="w-full h-fit flex flex-col gap-3 justify-center mx-auto items-center">
        <label>
          ID:
          <input id="id" type="text" className="text-center mx-auto" value={email} onChange={(e)=>{
            setEmail(e.target.value);
          }}/>
        </label>
        <label>
          PW:
          <input id="pw" type="password" className="text-center mx-auto" value={pw} onChange={(e)=>{
            setPw(e.target.value);
          }}/>
        </label>
        <button 
          className="rounded-md border-2 border-black mx-auto px-5 py-2"
          onClick={onSubmit}
        > Sign in</button>
      </div>
    </div>
  )
}

export default Login;