import React, { useEffect, useState } from "react";
import "animate.css";

const Users = () => {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Fetch User Data From API
  const fetchUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const result = await response.json();
    console.log(result.data);
    setIsLoading(false);
    setUsersData(result.data);
  };
  //useEffect
  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 2000);
  }, []);
  return (
    <div>
      {isLoading ? (
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <div class="spinner-grow text-danger" role="status">
            {/* <span class="visually-hidden">Loading...</span> */}
          </div>
        </div>
      ) : (
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h2 className="fw-bold pb-3 text-dark"> Users </h2>
          </div>
          <div className="row pb-5">
            {usersData.map((user, index) => {
              return (
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 my-2">
                  <div 
                    className="card w-100 p-3 shadow-sm"
                    id={index}
                  >
                    <div className="d-flex flex-column align-items-center">
                      <div className="image">
                        <img
                          src={user.avatar}
                          className="rounded"
                          width="180"
                          alt=""
                        />
                      </div>
                      <div className="ml-3 w-100 text-center">
                        <h4 className="mb-0 mt-0">
                          {user.first_name} {user.last_name}
                        </h4>
                        <span className="text-muted"> {user.email} </span>
                        <div className="button mt-1 d-flex flex-row justify-content-center pt-4">
                          <button className="btn btn-sm btn-outline-primary fw-bold w-25">
                            Message
                          </button>
                          <button className="btn btn-sm btn-success fw-bold text-white w-25 ml-2">
                            Follow
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
