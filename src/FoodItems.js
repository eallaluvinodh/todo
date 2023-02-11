import React from "react";

const FoodItems = ({ data }) => {
  return (
    <div >
      <div className="row">
        {data.map((data) => (
          <div className="col-md-4">
            <div class="card" style={{ width: "18rem" }}>
              <img
                class="card-img-top"
                src={data.recipe.image}
                alt="Card iamge cap"
              />
              <div class="class-body">
                <center>
                  <h5 class="card-tittle"> {data.recipe.label} </h5>
                  <p class="card-text">
                    Total Amount Of Calories: {Math.round(data.recipe.calories)}
                  </p>
                  <a href="#" class="btn btn-primary">
                    Buy
                  </a>
                </center>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodItems;
