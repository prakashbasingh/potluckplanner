import React from "react";

const Guest = () => {
  return (
    <div className="modal fade" id="myModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4>Update Your Guest Info</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <UpdateGuestForm newGuest={newGuest} newGuestId={newGuest.id} />
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guest;
