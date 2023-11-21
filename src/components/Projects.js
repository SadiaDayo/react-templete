import image from "../assets/images/crousal.jpg";

function Projects() {
  return (
    <>
      <div className={"bg-dark text-white"}>
        <div className="row pt-4">
        <div className="col-md-12 col-sm-12 col-lg-6">
          <h1>Projects Completed!</h1>
        </div>
        <div className="col-md-12 col-sm-12 col-lg-6">
          <button className="btn btn-light">View All Projects</button>
        </div>
        </div>
        <div className="container row pt-4 pb-4">
          <div className="col-md-6 col-sm-12 col-lg-3">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={image} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-dark">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-3">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={image} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-dark">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-3">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={image} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-dark">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Projects;
