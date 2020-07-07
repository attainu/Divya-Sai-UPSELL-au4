import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { resetPassword } from "../../../auth/helper";

export default function UpdatePassword({ email }) {
  const [open, setOpen] = React.useState(false);
  const [newPassword, setNewPassword] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const timedMessage = (status) => {
    setTimeout(() => {
      setStatus("");
      setDialogOpen(false);
    }, 5000);
    if (status === "OK") {
      return (
        <p
          className="text-success"
          style={dialogOpen ? { display: "block" } : { display: "none" }}
        >
          Success
        </p>
      );
    } else if (status === "NotFound") {
      return <p>User not found</p>;
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (newPassword.length) {
      resetPassword(email, newPassword).then((data) => {
        if (data.error) {
          setStatus("NotFound");
          setOpen(false);
          setNewPassword("");
        } else {
          setStatus("OK");
          setOpen(false);
          setDialogOpen(true);
          setNewPassword("");
        }
      });
    }
  };
  return (
    <div style={{ alignSelf: "center" }}>
      {!dialogOpen
        ? null
        : status.indexOf("OK") > -1
        ? timedMessage(status)
        : null}
      <button
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
        class="btn btn-primary"
      >
        Change Password
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <h2>Reset Password</h2>
        <form>
          <div class="form-group">
            <label>Email</label> <br />
            <input type="email" value={email} disabled />
          </div>
          <div class="form-group">
            <label>New Password</label>
            <br />
            <input
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <button
            className="btn btn-primary"
            style={{ width: "100%" }}
            onClick={onSubmit}
          >
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
}
