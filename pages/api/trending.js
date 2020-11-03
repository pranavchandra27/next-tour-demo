// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const TRENDING_SONGS = [
  {
    id: 1,
    title: "Sweet Dreams",
  },
  {
    id: 2,
    title: "It's Ok If You Forgot MeAstrid",
  },
  {
    id: 3,
    title: "BlueBerry Eyes",
  },
  {
    id: 4,
    title: "Savage Love",
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.json(TRENDING_SONGS);
};
