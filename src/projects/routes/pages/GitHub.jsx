import React from "react";
import { useLoaderData } from "react-router-dom";

const GitHub = () => {
  const user = useLoaderData()
  // const [user, setUser] = useState([]);
  // useEffect(() => {
  //     fetch("https://api.github.com/users/charimaroj")
  //       .then(res => res.json())
  //       .then(data => setUser(data))
     
  //   },
  //   []);

  
  return (
    <main className="flex-shrink-0 vh-100 pt-5">
      <div className="container">
        <h1 className="mt-5">GitHub Page</h1>

        <div class="col-lg-4">     
            <img  class="bd-placeholder-img rounded-circle" src={user.avatar_url} width="140" height="140"/>
            <h2 class="fw-normal">GitHub Account:{user.login} </h2>  
        </div>
      </div>
    </main>
  );
};

export default GitHub;

export const gitHubLoaderInfo = async ()=>{
  const response = await fetch("https://api.github.com/users/charimaroj")
  return response.json()

}
