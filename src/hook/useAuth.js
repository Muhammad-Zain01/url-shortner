import useSession from "./useSession";
import useCookie from "./useCookies";

const useAuth = () => {
  const Session = useSession();
  const Cookie = useCookie();
  const token = Cookie.get("token");
  let session = Session.get("user");

  if (!session) {
    if (token) {
      try {
        // Check if token is a string and contains dots (JWT format)
        if (typeof token === 'string' && token.split(".").length === 3) {
          const session_data = atob(token.split(".")[1]);
          Session.set("user", session_data);
          session = session_data;
        } else {
          // Handle case where token might be malformed
          console.error("Invalid token format:", token);
          Cookie.remove("token"); // Remove invalid token
          Session.clear();
          return null;
        }
      } catch (error) {
        console.error("Error parsing token:", error);
        Cookie.remove("token"); // Remove problematic token
        Session.clear();
        return null;
      }
    }
  }
  
  if (!token) {
    Session.clear();
    session = null;
  }
  
  try {
    session = session != null && JSON.parse(session);
  } catch (error) {
    console.error("Error parsing session:", error);
    session = null;
  }
  
  return session;
};

export default useAuth;
