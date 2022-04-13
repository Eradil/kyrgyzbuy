import { Button, Form, Input, InputNumber } from "antd";
import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { contextProducts } from "../../context/contextProducts";
import "./EditProduct.css";

const EditProduct = () => {
  const { getOneProduct, editProduct, oneProduct } =
    useContext(contextProducts);
  const params = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  useEffect(() => {
    getOneProduct(params.id);
  }, []);

  useEffect(() => {
    form.setFieldsValue(oneProduct);
  }, [oneProduct]);

  function save(values) {
    console.log(values);
    editProduct(params.id, values);
    navigate("/");
  }

  return (
    <div className="edit_products">
      <h2 className="edit_title">You can make adjustments</h2>
      <div className="edit_box">
        <Form form={form} layout="vertical" name="basic" onFinish={save}>
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
                message: "Please edit URL of image!",
              },
            ]}
          >
            <Input placeholder="URL of image" />
          </Form.Item>
          <Form.Item
            label="Image"
            name="image"
            rules={[
              {
                required: true,
                message: "Please edit URL of second image!",
              },
            ]}
          >
            <Input placeholder="URL of second image" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Save product</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EditProduct;