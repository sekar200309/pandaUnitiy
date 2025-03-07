import { useEffect, useState } from "react";
import { Redirect } from "expo-router";

export default function Index() {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    setShouldRedirect(true); // Trigger redirection immediately
  }, []);

  if (shouldRedirect) {
    return <Redirect href={"/home"} />;
  }

  return null; // Return nothing while redirecting
}
