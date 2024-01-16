// Dummydata för games
const games = [
  {
    id: "1",
    title: "The Legend of Zelda: Breath of the Wild",
    platform: ["Nintendo Switch"],
  },
  { id: "2", title: "Red Dead Redemption 2", platform: ["PlayStation 4"] },
  { id: "3", title: "Super Mario Odyssey", platform: ["Nintendo Switch"] },
  { id: "4", title: "The Witcher 3: Wild Hunt", platform: ["Xbox One"] },
];

// Dummydata för reviews
const reviews = [
  {
    id: "1",
    rating: 9,
    content:
      "En fantastisk upplevelse! Spelvärlden är otroligt öppen och detaljerad.",
    author_id: "1",
    game_id: "1",
  },
  {
    id: "2",
    rating: 8,
    content:
      "Ett episkt västerndrama med imponerande grafik och en gripande berättelse.",
    author_id: "1",
    game_id: "1",
  },
  {
    id: "3",
    rating: 9,
    content:
      "Mario är tillbaka i en underbar resa fylld med kreativa nivåer och roliga äventyr.",
    author_id: "2",
    game_id: "2",
  },
  {
    id: "4",
    rating: 9,
    content:
      "En av de bästa rollspelen någonsin, med en förtrollande värld och episka berättelser.",
    author_id: "3",
    game_id: "1",
  },
];

// Dummydata för authors
const authors = [
  { id: "1", name: "Alice Johnson", verified: true },
  { id: "2", name: "Bob Anderson", verified: false },
  { id: "3", name: "Charlie Davis", verified: true },
  { id: "4", name: "Eva Smith", verified: false },
];

export default { games, reviews, authors };
