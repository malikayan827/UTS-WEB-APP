import React from "react";
import Header from "../components/Header";
import "./Profile.css";
import { MdOutlineEdit } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { PiBagSimpleBold } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Profile() {
  return (
    <>
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
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
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
              </div>
              <div className="editArea">
                <MdOutlineEdit style={{ color: "white"}}/>
              </div>
            </div>

            <hr className="line" style={{ color: "white" }} />
            {/* locationAndStatus */}
            <div className="locationAndStatus">
              <div>
                <CiLocationOn style={{ color: "white" }} size={23} />
                <text
                  style={{
                    color: "white",
                    marginLeft: "15px",
                    fontSize: "13px",
                  }}
                >
                  Location
                </text>
              </div>
              <div>
                <PiBagSimpleBold style={{ color: "white" }} size={23} />
                <text
                  style={{
                    color: "white",
                    marginLeft: "15px",
                    fontSize: "13px",
                  }}
                >
                  Software Developer
                </text>
              </div>
            </div>

            <hr className="line" style={{ color: "white" }} />
            {/* social profiles */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <text
                style={{ color: "white", fontWeight: "bold", fontSize: "15px" }}
              >
                Social Profiles
              </text>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <FaTwitter style={{ color: "white" }} size={23} />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <text
                        style={{
                          color: "white",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        Twitter
                      </text>
                      <text style={{ color: "white", fontSize: "11px" }}>
                        dssdfds
                      </text>
                    </div>
                  </div>
                  <MdOutlineEdit style={{ color: "white" }} />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <FaLinkedin style={{ color: "white" }} size={23} />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <text
                        style={{
                          color: "white",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        Twitter
                      </text>
                      <text style={{ color: "white", fontSize: "11px" }}>
                        dssdfds
                      </text>
                    </div>
                  </div>
                  <MdOutlineEdit style={{ color: "white" }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* center side */}
        <div className="centerSide">
          <div className="createPost">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // gap: "10px",
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
              <div style={{ width: "85%" }}>
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
                <CiImageOn style={{ color: "white" }} size={20} />
                <text
                  style={{
                    color: "white",
                    marginLeft: "2px",
                    fontSize: "13px",
                  }}
                >
                  Add Image
                </text>
              </div>
              <div>
                <button className="postButton">Post</button>
              </div>
            </div>
          </div>
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
              <div>
                <MdOutlineEdit style={{ color: "white" }} />
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
    </>
  );
}
