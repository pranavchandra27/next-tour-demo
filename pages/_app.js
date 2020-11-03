import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { useRouter } from "next/router";
import Joyride from "react-joyride";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [steps, setSteps] = useState([
    {
      title: "Main Title",
      target: ".main-content",
      content: "This is the main content header",
      disableBeacon: true,
    },
    {
      isFixed: true,
      target: ".main-heading",
      content: "This is the main heading",
    },
    {
      target: ".nav-trending",
      content: "This is Link to on a Trending page",
    },
    {
      target: ".trending-header",
      content: "Trending Info",
    },
    {
      target: ".trending-heading",
      content: "Trending Heading",
    },
    {
      target: ".nav-profile",
      content: "This is link to profile",
    },
    {
      target: ".profile-title",
      content: "This is name of user ",
    },
    {
      target: ".profile-position",
      content: "This is user's occupation",
    },
  ]);

  const handleCallback = data => {
    console.log(data);
    const { step } = data;

    if (step.target === ".nav-trending") {
      router.push({ pathname: "/trending" });
    }

    if (step.target === ".nav-profile") {
      router.push({ pathname: "/profile" });
    }
  };

  return (
    <>
      <Joyride
        run={true}
        callback={handleCallback}
        spotlightClicks={true}
        scrollToFirstStep={true}
        showProgress={true}
        showSkipButton={true}
        steps={steps}
        continuous={true}
        styles={{
          options: {
            zIndex: 10000,
          },
        }}
      />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
