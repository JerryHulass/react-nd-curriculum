import React from "react";

export default function Form({ option, data }) {
  // Reusable both my LOGIN (Sign In) AND LOGOUT ( Sign Out )

  return (
    <div>
      {/* Create a Turanery Saying Are you Signing in or up  */}
      {/* {IsLoggedIn ? (
        <form>
          <label></label>
          <input></input>
        </form>
      ) : (
        <form>
          <label></label>
          <input></input>
        </form>
      )} */}

      {/* <form onSubmit={() => {}}>
        <label> username :</label>
        <input type="text" placeholder=" Input Username ?"></input>
        <button type="submit">{IsLoggedIn ? "Sign Up" : " Login "}</button>
      </form> */}
      {/* <Reuseme option={option} data={data} /> */}
    </div>
  );
}
