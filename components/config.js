export const steps = [
  {
    title: <p style={{ textAlign: "left" }}>Helloo</p>,
    target: ".main-content",
    content: "This is the main content header",
    disableBeacon: true,
  },
  {
    title: "Welcome to ShelfSmart data",
    isFixed: true,
    target: ".main-heading",
    content: (
      <div
        style={{
          fontSize: "13px",
          textAlign: "left",
          width: "250px",
          padding: "0px",
        }}>
        ShelfSmart will help you
        <ul>
          <li>
            <strong>
              Increase sales through identifying voids, gaps, and opportunities
            </strong>
          </li>
          <li>
            <strong>Track retail performance by upc and store</strong>
          </li>
          <li>
            <strong>
              Save time and money by orginizing all your point of sale and
              distributor data
            </strong>
          </li>
        </ul>
        <p>
          ShelfSmart provides a clear retail picture so you know where your
          product is, is not, and how it is performing. We would like to take
          you on a tour of our features and benefits. If you are a DIY person
          just click "End tour" at anytime and explore. If you want to restart
          the tour please refresh the page.
        </p>
      </div>
    ),
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
];
