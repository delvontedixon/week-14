/*MovieList: a container for all the Movie components and their data.*/

let Listofmovies = [
  {
    id: 1,
    moviename: "Iron Man",
    movieactor: "Robert Downey",
  },
  {
    id: 2,
    moviename: "Ant Man",
    movieactor: "Paul Rudd",
  },
  {
    id: 3,
    moviename: "Remember The Titans",
    movieactor: "Denzel Washington",
  },
];

function MovieList() {
  return (
    <div className="CustomButton">
      List of movies
      {Listofmovies.map((movie, index) => (
        <div key={index}>This is the Movie List Component</div>
      ))}
    </div>
  );
}

export default MovieList;
