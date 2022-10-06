import React, { useState } from "react";
import "./Problems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/fontawesome-free-solid";
import Ratings from "../Ratings/Ratings";

const data = {
  800: [
    {
      problem: "Polycarp and Coins",
      link: "https://codeforces.com/problemset/problem/1551/A",
      status: 0,
      bookmarked: 1,
    },
    {
      problem: "Polycarp and Coins",
      link: "https://codeforces.com/problemset/problem/1551/A",
      status: 1,
      bookmarked: 0,
    },
    {
      problem: "Polycarp and Coins",
      link: "https://codeforces.com/problemset/problem/1551/A",
      status: 1,
      bookmarked: 0,
    },
    {
      problem: "Polycarp and Coins",
      link: "https://codeforces.com/problemset/problem/1551/A",
      status: 0,
      bookmarked: 1,
    },
  ],
  900: [
    {
      problem: "Polycarp and Coins",
      link: "https://codeforces.com/problemset/problem/1551/A",
      status: 1,
      bookmarked: 0,
    },
    {
      problem: "Polycarp and Coins",
      link: "https://codeforces.com/problemset/problem/1551/A",
      status: 1,
      bookmarked: 0,
    },
    {
      problem: "Polycarp and Coins",
      link: "https://codeforces.com/problemset/problem/1551/A",
      status: 0,
      bookmarked: 1,
    },
    {
      problem: "Polycarp and Coins",
      link: "https://codeforces.com/problemset/problem/1551/A",
      status: 1,
      bookmarked: 0,
    },
  ],
  1000: [
    {
      problem: "Polycarp and Coins",
      link: "https://codeforces.com/problemset/problem/1551/A",
      status: 0,
      bookmarked: 0,
    },
    {
      problem: "Polycarp and Coins",
      link: "https://codeforces.com/problemset/problem/1551/A",
      status: 1,
      bookmarked: 0,
    },
    {
      problem: "Polycarp and Coins",
      link: "https://codeforces.com/problemset/problem/1551/A",
      status: 0,
      bookmarked: 0,
    },
    {
      problem: "Polycarp and Coins",
      link: "https://codeforces.com/problemset/problem/1551/A",
      status: 1,
      bookmarked: 1,
    },
  ],
};

const Problems = ({ rating, ratingChanger }) => {
  const [problems, setProblems] = useState([]);

  useState(() => {
    setProblems(data[rating]);
  }, [data, rating]);
  return (
    <div className="problems2-page">
      <Ratings ratingChanger={ratingChanger} />
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
              return (
                <tr onClick={() => {}}>
                  <th scope="row">{i + 1}</th>
                  <td>{p.problem}</td>
                  <td>
                    {p.status == 0 ? (
                      <button type="button" class="btn btn-success">
                        Solve Problem
                      </button>
                    ) : (
                      <button type="button" class="btn btn-outline-success">
                        Solved
                      </button>
                    )}
                  </td>
                  <td>
                    <div class="form-group">
                      <textarea rows="2"></textarea>
                    </div>
                  </td>
                  <td>
                    {p.bookmarked == 1 ? (
                      <FontAwesomeIcon
                        icon="fa-solid fa-bookmark"
                        color="red"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon="fa-solid fa-bookmark"
                        color="grey"
                      />
                    )}
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
