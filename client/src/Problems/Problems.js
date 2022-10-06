import React, { useState } from "react";
import "./Problems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCheckSquare,
  faCoffee,
} from "@fortawesome/fontawesome-free-solid";
import Ratings from "../Ratings/Ratings";

const data = {
  800: [
    {
      problem: "Polycarp and Coins",
      link: "https://codeforces.com/problemset/problem/1551/A",
      status: "0",
    },
    {
      problem: "Polycarp and Coins",
      link: "https://codeforces.com/problemset/problem/1551/A",
      status: "1",
    },
    {
      problem: "Polycarp and Coins",
      link: "https://codeforces.com/problemset/problem/1551/A",
      status: "1",
    },
    {
      problem: "Polycarp and Coins",
      link: "https://codeforces.com/problemset/problem/1551/A",
      status: "0",
    },
  ],
  900: [
    {
      problem: "Polycarp and Coins",
      link: "https://codeforces.com/problemset/problem/1551/A",
      status: "1",
    },
    {
      problem: "Polycarp and Coins",
      link: "https://codeforces.com/problemset/problem/1551/A",
      status: "1",
    },
    {
      problem: "Polycarp and Coins",
      link: "https://codeforces.com/problemset/problem/1551/A",
      status: "0",
    },
    {
      problem: "Polycarp and Coins",
      link: "https://codeforces.com/problemset/problem/1551/A",
      status: "1",
    },
  ],
  1000: [
    {
      problem: "Polycarp and Coins",
      link: "https://codeforces.com/problemset/problem/1551/A",
      status: "0",
    },
    {
      problem: "Polycarp and Coins",
      link: "https://codeforces.com/problemset/problem/1551/A",
      status: "1",
    },
    {
      problem: "Polycarp and Coins",
      link: "https://codeforces.com/problemset/problem/1551/A",
      status: "0",
    },
    {
      problem: "Polycarp and Coins",
      link: "https://codeforces.com/problemset/problem/1551/A",
      status: "1",
    },
  ],
};

const Problems = () => {
  const [problems, setProblems] = useState([]);
  const rating = "800";
  useState(() => {
    setProblems(data[rating]);
  }, [data]);
  console.log(problems);
  return (
    <div className="problems2-page">
      <Ratings />
      <div className="table">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Problem</th>
              <th scope="col">Status</th>
              <th scope="col">Remarks</th>
              <th scope="col">bookmark</th>
            </tr>
          </thead>
          <tbody>
            {problems.map((p, i) => {
              console.log(p);
              return (
                <tr
                  onClick={() => {
                    console.log(2);
                  }}
                >
                  <th scope="row">{i + 1}</th>
                  <td>{p.problem}</td>
                  {/* <td>{p.status}</td> */}
                  <td>
                    <button type="button" class="btn btn-outline-success">
                      Success
                    </button>
                  </td>
                  <td>
                    <div class="form-group">
                      <textarea rows="2"></textarea>
                    </div>
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faBookmark} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Problems;
