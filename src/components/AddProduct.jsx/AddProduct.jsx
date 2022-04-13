import { Button, Form, Input, InputNumber, Modal } from "antd";
import React, { useContext, useState } from "react";
import { contextProducts } from "../../context/contextProducts";
import "./AddProduct.css";

const AddProduct = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { createProduct } = useContext(contextProducts);

  function save(newProduct) {
    createProduct({
      ...newProduct,
      // comment: [],
    });
    setIsModalVisible(false);
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleSave = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div className="add_btn">
        <Button onClick={showModal}>Add product</Button>
      </div>

      <Modal
        footer={null}
        title="Add products"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleSave}
      >
        <Form layout="vertical" name="basic" onFinish={save}>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input name!",
              },
            ]}
          >
            <Input placeholder="name of instrument" />
          </Form.Item>

          <Form.Item
            name="description"
            label="description"
            rules={[
              {
                required: true,
                message: "Please input description!",
              },
            ]}
          >
            <Input.TextArea placeholder="description" />
          </Form.Item>
          <Form.Item
            label="Produced"
            name="produced"
            rules={[
              {
                required: true,
                message: "Please input produced!",
              },
            ]}
          >
            <Input placeholder="produced" />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please input price!",
              },
            ]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="Details"
            name="details"
            rules={[
              {
                required: true,
                message: "Please input details!",
              },
            ]}
          >
            <Input placeholder="details" />
          </Form.Item>
          <Form.Item
            label="Image"
            name="image"
            rules={[
              {
                required: true,
                message: "Please input URL of image!",
              },
            ]}
          >
            <Input placeholder="URL of image" />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit">Add product</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddProduct;
