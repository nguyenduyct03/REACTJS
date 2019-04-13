/* Without CSS Modules, maybe with PostCSS */

import "../style.css"
import "bootstrap/dist/css/bootstrap.min.css"
export default () => {
  const info = [
    {
      date: "14/04/2019",
      event: "Wankanda",
      location: "VN",
      tag: "code"
    },
    {
      date: "12/04/2019",
      event: "Tram Anh ",
      location: "VN",
      tag: "code"
    }
  ]

  return (
    <>
      <nav
        className="navbar navbar-dark "
        style={{ justifyContent: "center", background: "black" }}
      >
        <span style={{ color: "white" }}>Hacker</span>
        <span style={{ color: "Red" }}>Event</span>
      </nav>

      <div
        className="jumbotron jumbotron-fluid"
        style={{ background: "black" }}
      >
        <div className="container" style={{ color: "white" }}>
          <h1 className="display-4">
            <strong>SỰ KIỆN</strong>
          </h1>
          <p className="lead">Rất hân hạnh được đón tiếp quý khách</p>
        </div>
      </div>
      <section className="container">
        <h1 style={{ fontWeight: 400 }}>Sắp Diễn Ra</h1>

        <div className="container">
          {info.map((value, i) => (
            <div key={i}>
              <hr />
              <div className="row">
                <div className="col-3">
                  <h3>Thang {value.date.split("/")[1]}</h3>
                </div>
                <div className="col-6">
                  <h3>{value.event}</h3>
                </div>
                <div className="col-3">
                  <h5>{`${value.tag}, ${value.location}`}</h5>
                </div>
              </div>
              {/* <hr /> */}
            </div>
          ))}
        </div>
        <hr />
      </section>
    </>
  )
}
