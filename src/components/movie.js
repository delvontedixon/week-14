function Movie() {
  return (
    <div className="movie">
      <table class="table table-striped table-success">
        <thead>
          <tr>
            <th scope="col">City</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fort Walton Beach, FL</td>
            <td>May 5th</td>
          </tr>
          <tr>
            <td scope="row">Fort Campbell, KY</td>
            <td>December 31st</td>
          </tr>
          <tr>
            <td scope="row">Lexington, KY</td>
            <td> June 26th</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Movie;
