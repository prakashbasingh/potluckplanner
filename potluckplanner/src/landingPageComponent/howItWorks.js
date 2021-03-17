import React from "react";
import "./css/howItWorks.css";

export default function HowItWorks() {
  return (
    <div>
      <header className="header">
        <div class="title">
          <h2>Potlucky Process</h2>
        </div>
      </header>

      <main>
        <div class="process">
          <div>
            <ol start="1">
              <li>1. Sign up with username, password, and a role</li>
              <li>2. if signed up as admin need to provide a admin code</li>
              <li>3. log in to your account to access the potluck page</li>
              <li>
                4. If logged in as Admin, can access all the potlucks and user's
                information
              </li>
              <li>
                5. If logged in as Organizer, can access only those potlucks
                created by logged in Organizer
              </li>
              <li>
                6. organizer can creat/update/delete potluck also can add/delete
                food items
              </li>
              <li>
                7. If logged in as Guest, can see all the potluck, but only can
                go to the invited potluck and add food
              </li>
              <li>8. Guest can only add food, edit, and delete food items </li>
              <li>9. List food items for people to bring.</li>
              <li>10. Send link to party invitees so they can sign up.</li>
            </ol>
          </div>

          <img src="https://images.unsplash.com/photo-1560269507-9495cdfcadca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
        </div>
      </main>

      <footer>
        <nav className="nav-landing2">
          <a
            className="b1 aTag"
            href="/"
            style={{ textDecoration: "none", color: "black" }}
          >
            Home
          </a>

          <a
            className="b2 aTag"
            href="/login"
            style={{ textDecoration: "none", color: "black" }}
          >
            Login
          </a>

          <a
            className="b3 aTag"
            href="/register"
            style={{ textDecoration: "none", color: "black" }}
          >
            Register
          </a>
          <a
            className="b4 aTag"
            href="/potluckPage"
            style={{ textDecoration: "none", color: "black" }}
          >
            Go To Potluck Page
          </a>

          <a
            className="b1 aTag"
            href="/aboutUs"
            style={{ textDecoration: "none", color: "black" }}
          >
            About Us
          </a>

          <a
            className="b2 aTag"
            href="/successStories"
            style={{ textDecoration: "none", color: "black" }}
          >
            Success Stories
          </a>

          <a
            className="b3 aTag"
            href="/stories"
            style={{ textDecoration: "none", color: "black" }}
          >
            Stories
          </a>

          <a
            className="b4 aTag"
            href="/howItWorks"
            style={{ textDecoration: "none", color: "black" }}
          >
            How It Works
          </a>
        </nav>
      </footer>
    </div>
  );
}
