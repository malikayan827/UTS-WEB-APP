import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import "./Profile.css";
import { CiLocationOn } from "react-icons/ci";
import { PiBagSimpleBold } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import EditProfileModal1 from "../components/EditProfileModal";
import { Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { TiDeleteOutline } from "react-icons/ti";

export default function Profile() {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [postText, setPostText] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
    console.log(token);
  }, []);

  const handleImageClick = () => {
    // Trigger the file input click when the image is clicked
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    // Handle the selected file here
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    console.log("Selected file:", selectedFile);
  };

  // const handlePost = async () => {
  //   try {
  //     const response = await fetch("http://localhost:4000/api/v1/post/upload", {
  //       method: "POST",
  //       headers: {
  //         // Add any headers if required
  //         'Content-Type': 'multipart/form-data',
  //         'Authorization': `Bearer ${token}`
  //       },
  //       body : {
  //         // Add form data
  //         description: postText,
  //         image: file
  //       }

  //     });

  //     const result = await response.json();

  //     // Handle the result as needed (e.g., show success message, update UI)
  //     console.log("Post response:", result);
  //   } catch (error) {
  //     console.error("Error posting:", error);
  //   }
  // };
  const handlePost = async () => {
    try {
      const formData = new FormData();
      formData.append("description", postText);
      // formData.append("image", file);
  
      const response = await fetch("http://localhost:4000/api/v1/post/upload", {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData,
      });
  
      const result = await response.json();
  
      // Handle the result as needed (e.g., show success message, update UI)
      console.log("Post response:", result);
    } catch (error) {
      console.error("Error posting:", error);
    }
  };
  

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
              <EditProfileModal1 />
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
                        Premium Account
                      </text>
                    </div>
                  </div>
                  <EditProfileModal1 />
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
                        Linked in
                      </text>
                      <text style={{ color: "white", fontSize: "11px" }}>
                        PRO
                      </text>
                    </div>
                  </div>
                  <EditProfileModal1 />
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
                width: "100%",
                justifyContent: "space-between",
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
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
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
                <button className="postButton" onClick={handlePost}>
                  Post
                </button>
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
              <div className="editArea">
                <TiDeleteOutline className="editIcon" size={24} />
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
