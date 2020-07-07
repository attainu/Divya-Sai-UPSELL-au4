import React from "react";
import UpdatePassword from "./UpdatePassword";

export default function Profile({ userData }) {
  console.log(userData);
  return (
    <div>
      <form style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div class="form-group">
          <label for="name">
            Name
            <input
              type="text"
              class="form-control"
              value={userData.name}
              disabled
            />
          </label>
        </div>
        <div class="form-group">
          <label for="email">
            Email
            <input
              type="text"
              class="form-control"
              value={userData.email}
              disabled
            />
          </label>
        </div>
        <div class="form-group">
          <label for="role">
            Role
            <input
              type="text"
              class="form-control"
              value={userData.role ? "Admin" : "User"}
              disabled
            />
          </label>
        </div>

        <UpdatePassword email={userData.email} />
      </form>
    </div>
  );
}
