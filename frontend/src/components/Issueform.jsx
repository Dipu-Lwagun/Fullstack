import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Upload, message, Image } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";

// Yup Validation Schema
const validationSchema = Yup.object({
  brand: Yup.string().required("Your device brand is required"),
  model: Yup.string().required("Model is required"),
  issuetitle: Yup.string().required("Issue title is required"),
  issue_des: Yup.string().required("Issue description is required"),
  category: Yup.string().required("Select category"),
  issuetype: Yup.string().required("Select issue type"),
  photos: Yup.array()
    .min(1, "You must upload at least 1 photo")
    .max(4, "You can only upload up to 4 photos")
    .required("Photos are required"),
});

const Issueform = () => {
  const [fileList, setFileList] = useState([]);

  const formik = useFormik({
    initialValues: {
      brand: "",
      model: "",
      issuetitle: "",
      issue_des: "",
      category: "",
      issuetype: "",
      photos: [],
    },
    validationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("brand", values.brand);
      formData.append("model", values.model);
      formData.append("issuetitle", values.issuetitle);
      formData.append("issue_des", values.issue_des);
      formData.append("category", values.category);
      formData.append("issuetype", values.issuetype);

      values.photos.forEach((photo) => {
        formData.append("photos", photo);
      });

      try {
        const response = await axios.post(
          "http://localhost:3000/api/issues",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        message.success("Issue submitted successfully!");
        console.log(response.data);
      } catch (error) {
        console.error("Error submitting issue:", error);
        message.error("Failed to submit issue");
        console.log(error);
      }
    },
  });

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);

    // Update Formik values for photos
    formik.setFieldValue(
      "photos",
      newFileList.map((file) => file.originFileObj)
    );
  };

  const handlePreview = async (file) => {
    let preview = "";
    if (!file.url && !file.preview) {
      const reader = new FileReader();
      reader.readAsDataURL(file.originFileObj);
      reader.onload = () => (preview = reader.result);
    } else {
      preview = file.url || file.preview;
    }
    Image.preview({
      src: preview,
    });
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div className="mt-8">
      <form onSubmit={formik.handleSubmit} className="text-xl">
        {/* Brand Field */}
        <div>
          <label className="text-2xl font-semibold" htmlFor="brand">
            Brand <br />
          </label>
          <select
            name="brand"
            id="brand"
            className="w-[20rem] px-4 rounded-lg bg-transparent border-2 border-gray-900"
            value={formik.values.brand}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select brand</option>
            <option value="dell">Dell</option>
            <option value="hp">HP</option>
            <option value="lenovo">Lenovo</option>
            <option value="apple">Apple</option>
            <option value="acer">Acer</option>
            <option value="asus">Asus</option>
            <option value="other">Other</option>
          </select>
          {formik.touched.brand && formik.errors.brand ? (
            <div className="text-red-600">{formik.errors.brand}</div>
          ) : null}
        </div>

        {/* Model Field */}
        <div>
          <label className="text-2xl font-semibold" htmlFor="model">
            Model
          </label>
          <br />
          <input
            type="text"
            name="model"
            className="w-[20rem] px-4 rounded-lg bg-transparent border-2 border-gray-900"
            value={formik.values.model}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.model && formik.errors.model ? (
            <div className="text-red-600">{formik.errors.model}</div>
          ) : null}
        </div>

        {/* Issue Title Field */}
        <div>
          <label className="text-2xl font-semibold" htmlFor="issuetitle">
            Issue Title
          </label>
          <br />
          <input
            type="text"
            name="issuetitle"
            className="w-[20rem] px-4 rounded-lg bg-transparent border-2 border-gray-900"
            value={formik.values.issuetitle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.issuetitle && formik.errors.issuetitle ? (
            <div className="text-red-600">{formik.errors.issuetitle}</div>
          ) : null}
        </div>

        {/* Issue Description Field */}
        <div>
          <label className="text-2xl font-semibold" htmlFor="issue_des">
            Issue Description
          </label>
          <br />
          <textarea
            name="issue_des"
            className="w-[20rem] px-4 rounded-lg bg-transparent border-2 border-gray-900"
            value={formik.values.issue_des}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.issue_des && formik.errors.issue_des ? (
            <div className="text-red-600">{formik.errors.issue_des}</div>
          ) : null}
        </div>

        {/* Category Field */}
        <div>
          <label className="text-2xl font-semibold" htmlFor="category">
            Category <br />
          </label>
          <select
            name="category"
            id="category"
            className="w-[20rem] px-4 rounded-lg bg-transparent border-2 border-gray-900"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select category</option>
            <option value="LAPTOP">Laptop</option>
            <option value="DESKTOP">Desktop</option>
          </select>
          {formik.touched.category && formik.errors.category ? (
            <div className="text-red-600">{formik.errors.category}</div>
          ) : null}
        </div>

        {/* Issue Type Field */}
        <div>
          <label className="text-2xl font-semibold" htmlFor="issuetype">
            Issue Type <br />
          </label>
          <select
            name="issuetype"
            id="issuetype"
            className="w-[20rem] px-4 rounded-lg bg-transparent border-2 border-gray-900"
            value={formik.values.issuetype}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select issue type</option>
            <option value="HARDWARE">Hardware</option>
            <option value="SOFTWARE">Software</option>
          </select>
          {formik.touched.issuetype && formik.errors.issuetype ? (
            <div className="text-red-600">{formik.errors.issuetype}</div>
          ) : null}
        </div>

        {/* Photo Upload Field */}
        <div>
          <Upload
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
            beforeUpload={() => false} // Disable automatic upload
          >
            {fileList.length >= 4 ? null : uploadButton}
          </Upload>
          {formik.touched.photos && formik.errors.photos ? (
            <div className="text-red-600">{formik.errors.photos}</div>
          ) : null}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="h-[80px] w-[300px] border-2 border-gray-800 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Issueform;
