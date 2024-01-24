import React, { useState, useRef } from "react";
import Header from "../components/Header";
import "./Profile.css";
import "./Home.css";
import { CiImageOn } from "react-icons/ci";
import { Button, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { TiDeleteOutline } from "react-icons/ti";


export default function Home() {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    console.log("Selected file:", selectedFile);
  };
  return (
    <div style={{backgroundColor:'black'}}>
      <div style={{ height: "50px" }}>
        <Header />
      </div>
      <div className="profileView">
        {/* left side */}
        <div className="leftSide">
          {/* profileInfo */}
          <div className="profileInfo">
            {/* image part */}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                alignItems: "center",
              }}
            >
              <img
                src="https://www.bing.com/th?id=OIP.LXgGL1pyJx2VIQcj3yXeGgHaFj&w=133&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2"
                alt="profile pic"
                className="UserImage"
              />
              <text className="userName">Muhammad Faraz Baig</text>
              <text className="userStatus">Software Developer</text>
            </div>

            <hr className="line" style={{ color: "white" }} />
            {/* view profile */}
            <div className="viewProfile">
              <Button variant="secondary" className="viewProfileButton">View Profile</Button>
            </div>
          </div>
          {/* create post */}
          <div className="createPost">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div style={{ width: "13%" }}>
                <img
                  src="https://www.bing.com/th?id=OIP.LXgGL1pyJx2VIQcj3yXeGgHaFj&w=133&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2"
                  alt="profile pic"
                  className="UserImage"
                />
              </div>
              <div style={{ width: "80%" }}>
                <Form className="d-flex">
                  <FormControl
                    type="text"
                    placeholder="What`s on your mind..."
                    className="postText"
                  />
                </Form>
              </div>
            </div>
            <hr className="line" style={{ color: "white" }} />
            <div className="imageAndButton">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <CiImageOn
                  style={{ color: "white", cursor: "pointer" }}
                  size={20}
                  onClick={handleImageClick}
                />
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />

                <text
                  style={{
                    color: "white",
                    marginLeft: "2px",
                    fontSize: "13px",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                  onClick={handleImageClick}
                >
                  Add Image
                </text>
                <text
                  style={{
                    color: "white",
                    marginLeft: "2px",
                    fontSize: "13px",
                  }}
                >
                  {file && file.name}
                </text>
              </div>

              <div>
                <Button variant="secondary" className="postButton viewProfileButton">Post</Button>
              </div>
            </div>
          </div>   
        </div>
        

        {/* center side */}
        <div className="centerSide">
          
          <div className="post">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://www.bing.com/th?id=OIP.LXgGL1pyJx2VIQcj3yXeGgHaFj&w=133&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2"
                  alt="profile pic"
                  className="UserImage"
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <text className="userName">Muhammad Faraz Baig</text>
                  <text className="postTime">2 hours ago</text>
                </div>
              </div>
              <div className="editArea">
                <TiDeleteOutline className="editIcon" size={24}/>
              </div>
            </div>
            <text className="postTextShown">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptate, quibusdam, voluptatibus,
            </text>
            <img
              src="https://www.bing.com/th?id=OIP.evUMYFwlMncUnlz-sqBP5wHaEo&w=153&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2"
              alt="profile pic"
              className="postImage"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <text style={{ color: "white", fontSize: "13px" }}>Like</text>
                <text style={{ color: "white", fontSize: "13px" }}>
                  Comment
                </text>
                <text style={{ color: "white", fontSize: "13px" }}>Share</text>
              </div>
              <div>
                <text style={{ color: "white", fontSize: "13px" }}>
                  5 Likes
                </text>
              </div>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <div className="createAdd">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <text
                style={{ color: "white", fontSize: "15px", fontWeight: "bold" }}
              >
                Sponsered
              </text>
              <text
                style={{ color: "white", fontSize: "12px", fontWeight: "300" }}
              >
                Create add
              </text>
            </div>
            <img
              src="https://www.bing.com/th?id=OIP.evUMYFwlMncUnlz-sqBP5wHaEo&w=153&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2"
              alt="profile pic"
              className="addImage"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <text
                style={{ color: "white", fontSize: "11px", fontWeight: "bold" }}
              >
                MikaCosmetic
              </text>
              <text
                style={{ color: "grey", fontSize: "11px", fontWeight: "400" }}
              >
                mikaCosmetic.com
              </text>
            </div>
            <text
              style={{ color: "darkGrey", fontSize: "12px", fontWeight: "300" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptate, quibusdam, voluptatibus,
            </text>
          </div>
        </div>
      </div>
    </div>
  );
}
