/*Movie: a component that represents movie data (i.e. image, synopsis, rating, etc…)*/

function Movie() {
  return (
    <div className="movie">
      <table class="table table-striped table-success">
        <thead>
          <tr>
            <th scope="col">Movie</th>
            <th scope="col">Actor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Iron Man</td>
            <td>Robert Downey</td>
          </tr>
          <tr>
            <td scope="row">Ant Man</td>
            <td>Paul Rudd</td>
          </tr>
          <tr>
            <td scope="row">Remember The Titans</td>
            <td>Denzel Washington</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Movie;
