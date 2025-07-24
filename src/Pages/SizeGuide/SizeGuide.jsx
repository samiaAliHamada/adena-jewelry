export default function SizeGuide() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Jewelry Size Guide</h2>

      <section className="mb-5">
        <h4 className="mb-3">Ring Size Guide</h4>
        <p>
          To find your perfect ring size, measure the diameter of a ring you
          already wear and compare it to the chart below.
        </p>
        <table className="table table-bordered w-100 text-center mt-3">
          <thead className="table-dark">
            <tr>
              <th>Diameter (mm)</th>
              <th>US Size</th>
              <th>UK Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>14.8</td>
              <td>4</td>
              <td>H</td>
            </tr>
            <tr>
              <td>16.5</td>
              <td>6</td>
              <td>L</td>
            </tr>
            <tr>
              <td>17.3</td>
              <td>7</td>
              <td>N</td>
            </tr>
            <tr>
              <td>18.1</td>
              <td>8</td>
              <td>P</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-5">
        <h4 className="mb-3">Bracelet Size Guide</h4>
        <p>
          Measure your wrist with a flexible tape or string, then add 1-2 cm for
          comfort. Use the chart below:
        </p>
        <ul>
          <li>
            <strong>Small:</strong> 16 cm
          </li>
          <li>
            <strong>Medium:</strong> 18 cm
          </li>
          <li>
            <strong>Large:</strong> 20 cm
          </li>
        </ul>
      </section>

      <section className="mb-5">
        <h4 className="fw-bold my-4">Necklace Length Guide</h4>
        <img
          src="/necklace-size.png"
          alt="Necklace Length Chart"
          className="img-fluid rounded shadow-sm"
        />
        <p className="mt-2">
          The image above shows how different necklace lengths fall on the body.
        </p>
      </section>
    </div>
  );
}
