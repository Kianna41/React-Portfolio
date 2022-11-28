import React from "react";

export default function Contact() {
  return (
    <div>
      <div class="flex bg-black">
        <div class="ml-20 h-full col-span-1 grid grid-cols-1 pl-96">
          <div class="start bg-amber-400 w-4/5 border-bg-black rounded-2xl">
            <div class="card p-8 m-5 border-2 bg-amber-300 rounded-2xl">
              <form class="form login-form">
                <div class="form-group">
                  <p>Contact Me!</p>
                  <label class="form-label" for="fullName">
                    Full Name:
                  </label>
                  <input
                    class="form-input form-control"
                    type="text"
                    id="fullName"
                  />
                </div>
                <div class="form-group">
                  <label for="emailInput">Email:</label>
                  <input
                    class="form-input form-control"
                    type="password"
                    id="emailInput"
                  />
                </div>
                <div class="form-group">
                  <label for="messageDesc">Message:</label>
                  <input
                    class="form-input form-control"
                    type="password"
                    id="messageDesc"
                  />
                </div>
                <div class="BtnSpace">
                  <button
                    class="submitBtn btn-primary border-2 bg-white p-3 m-5 rounded-2xl hover:bg-amber-500"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
