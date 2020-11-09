import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { useRouter } from "next/router";
import Joyride from "react-joyride";
import { ToastContainer } from "react-toastify";
import { steps } from "../components/config";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const handleCallback = data => {
    console.log(data);
    const { step, action } = data;

    if (step.target === ".nav-trending") {
      router.push({ pathname: "/trending" });
    }

    if (action === "prev" && step.target === ".nav-trending") {
      router.back();
    }

    if (step.target === ".nav-profile") {
      router.push({ pathname: "/profile" });
    }
  };

  return (
    <>
      <Joyride
        run={false}
        callback={handleCallback}
        spotlightClicks={true}
        scrollToFirstStep={true}
        showProgress={true}
        showSkipButton={true}
        steps={steps}
        continuous={true}
        styles={{
          options: {
            width: 300,
            zIndex: 10000,
          },
        }}
      />
      <ToastContainer />
      {/* <Navbar /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
