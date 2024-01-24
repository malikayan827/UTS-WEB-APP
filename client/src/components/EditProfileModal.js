import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MdOutlineEdit } from "react-icons/md";
import "../screens/Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";

function EditProfileModal1() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="editArea">
        <MdOutlineEdit className="editIcon" onClick={handleShow} />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Item Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
                // value={item.name}
                // onChange={(e) => setItem({ ...item, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Item Image</label>
              <input
                type="file"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Item Image"
                // onChange={handleFileChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProfileModal1;
