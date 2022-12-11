import { useEffect, useState } from "react";
import { auth, _auth } from "../config/firebase";

const Header = () => {
  const [uid, setUid] = useState<string>("");
  useEffect(()=>{
    setUid(auth.currentUser?.uid || "");
  }, [uid])

  return (
    <div className="w-full flex h-[75px] bg-black">
      {uid && (
        <div className="flex w-full h-full text-white justify-between items-center px-10">
          <div className="text-lg text-white">
            Map-Manager
          </div>
          <button className="px-2 py-1 bg-white text-black rounded-md" onClick={()=>{_auth.signOut(auth)}} >
            Log-out
          </button>
        </div>
      )}
    </div>
  )
}

export default Header;