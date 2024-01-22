let Listofmovies = [
  {
    id: 1,
    moviename: "Echo",
    movieactor: "Lebron",
  },
  {
    id: 2,
    moviename: "Fly",
    movieactor: "Mike",
  },
  {
    id: 3,
    moviename: "High",
    movieactor: "James",
  },
];

function MovieList() {
  return (
    <div className="CustomButton">
      List of movies
      {Listofmovies.map((movie, index) => (
        <div key={index}>This is my movie</div>
      ))}
    </div>
  );
}

export default MovieList;
