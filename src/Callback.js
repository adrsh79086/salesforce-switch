import { useEffect } from "react";

export default function Callback() {

 useEffect(() => {

  const hash = window.location.hash.substring(1);

  const params = new URLSearchParams(hash);

  const token = params.get("access_token");

  const instance = params.get("instance_url");

  localStorage.setItem("token", token);

  localStorage.setItem("instance", instance);

  window.location.href = "/dashboard";

 }, []);

 return <h1>Logging in...</h1>;
}