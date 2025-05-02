import { NavLink } from "react-router-dom";
export const Home = () => {
  return (
    <main style={{ padding: "4rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
      {/* Hero Section */}
      <section>
        <h1
          style={{
            fontFamily: "syne",
            fontSize: "4rem",
            color: "#fff",
            textAlign: "center",
            textDecoration: "underline",
            letterSpacing: "0.1rem",
            marginBottom: "2rem",
          }}
        >
          Welcome to the React Tanstack Query Project
        </h1>
        <p
          style={{
            fontFamily: "urbanist",
            fontSize: "1.8rem",
            color: "#fff",
            lineHeight: 1.6,
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto 3rem auto",
            letterSpacing: "0.12rem",
          }}
        >
          This project demonstrates modern React data fetching techniques using
          React Query and axios, combined with elegant UI patterns and a sleek
          dark theme. Explore infinite scrolling, CRUD operations, and optimized
          caching strategies.
        </p>
        <div style={{ textAlign: "center" }}>
          <NavLink to="/trad">
            <button
              style={{
                padding: "1rem 2rem",
                borderRadius: "0.3rem",
                backgroundColor: "hsl(160, 80%, 48%)",
                color: "#fff",
                fontSize: "1.5rem",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                cursor: "pointer",
                border: "none",
                boxShadow: "rgb(0 0 0 / 5%) 0 0 8px",
                transition: "all 0.5s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "hsl(160, 80%, 40%)";
                e.currentTarget.style.boxShadow =
                  "rgb(9, 172, 115) 0px 7px 19px 0px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "hsl(160, 80%, 48%)";
                e.currentTarget.style.boxShadow = "rgb(0 0 0 / 5%) 0 0 8px";
              }}
            >
              Get Started
            </button>
          </NavLink>
        </div>
      </section>

      {/* Functionalities Learned Section */}
      <section
        style={{
          marginTop: "5rem",
          backgroundColor: "#212f3c",
          padding: "2rem",
          borderRadius: "0.3rem",
          boxShadow: "2px 3px 10px #111111",
          color: "#fff",
          fontFamily: "urbanist",
          letterSpacing: "0.1rem",
        }}
      >
        <h2
          style={{
            fontFamily: "syne",
            fontSize: "2.8rem",
            textDecoration: "underline",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          Key Functionalities Learned
        </h2>
        <ul
          style={{ paddingLeft: "1.5rem", fontSize: "1.6rem", lineHeight: 1.6 }}
        >
          <pre>
            <li>
              ||~|| Traditional React data fetching with useEffect and useState.
              ||~||
            </li>
            <li>
              ||~|| API fetching with axios for RESTful data access. ||~||
            </li>
            <li>
              ||~|| React Query for efficient data fetching, caching, and
              mutations.||~||
            </li>
            <li>
              ||~|| Infinite scrolling implementation using intersection
              observer. ||~||
            </li>
            <li>||~|| Pagination controls for navigating data pages. ||~||</li>
            <li>
              ||~|| CRUD operations with optimistic cache updates for seamless
              UI. ||~||
            </li>
            <li>
              ||~|| React Router for dynamic routing, nested routes, and
              navigation.||~||
            </li>
            <li>
              ||~|| Usage of React Query Devtools for debugging and development.
              ||~||
            </li>
          </pre>
        </ul>
      </section>
    </main>
  );
};
