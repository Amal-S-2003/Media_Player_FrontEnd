import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import {
  addCategoryAPI,
  deleteCategoryAPI,
  getAVideoAPI,
  getCategoryAPI,
  updateCategoryAPI,
} from "../services/allAPI";
import { Col, Row } from "react-bootstrap";
import VideoCard from "./VideoCard";

function Category(dropVideoResponse) {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log(categoryName);
  const handleAdd = async () => {
    if (categoryName) {
      const result = await addCategoryAPI({ categoryName, allVideos: [] });
      if ((result.status >= 200) & (result.status < 300)) {
        handleClose();
        setCategoryName("");
      } else {
        console.log(result.message);
      }
    } else {
      alert("Please fill missing fields");
    }
  };

  const getCategories = async () => {
    const { data } = await getCategoryAPI();
    setAllCategories(data);
  };

  const removeCategory = async (id) => {
    await deleteCategoryAPI(id);
    getCategories();
  };

  const dragOver = (e) => {
    console.log("video drag over the category");
    e.preventDefault();
  };

  const videoDrop = async (e, categoryId) => {
    const videoId = e.dataTransfer.getData("videoId");
    console.log(videoId, "droped into category id:", categoryId);
    const { data } = await getAVideoAPI(videoId);
    console.log(data);
    const selectedCategory = allCategories.find(
      (item) => item.id == categoryId
    );
    selectedCategory.allVideos.push(data);
    console.log(selectedCategory);
    await updateCategoryAPI(categoryId, selectedCategory);
    getCategories();
  };

  useEffect(() => {
    getCategories();
  }, [dropVideoResponse]);

  const videoDragStarted=(e,videoId,categoryId)=>{
    let dataShare={videoId,categoryId}
    e.dataTransfer.setData('data',JSON.stringify(dataShare))
  }

  return (
    <>
      <div className="d-grid">
        <Button className="btn btn-primary" onClick={handleShow}>
          Add Category
        </Button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel
              controlId="floatingInput1"
              label="Add Category"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Add Category"
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      {allCategories?.length > 0 ? (
        allCategories.map((category) => (
          <div
            className="border border-3 m-3 p-3"
            droppable="true"
            onDragOver={(e) => dragOver(e)}
            onDrop={(e) => videoDrop(e, category?.id)}
          >
            <div className="d-flex justify-content-between align-items-center">
              <p>{category.categoryName}</p>
              <button
                className="text-danger btn"
                onClick={() => removeCategory(category?.id)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
            <Row>
              {
                category?.allVideos.length>0?category?.allVideos.map(card=>(
                  <Col sm={12} className="mb-2 mt-2 p-2 " draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}>
                    <VideoCard video={card} insideCategory={true}/>
                  </Col>
                )):null
              }
            </Row>
          </div>
        ))
      ) : (
        <p className="text-danger">No categories created</p>
      )}
    </>
  );
}

export default Category;
