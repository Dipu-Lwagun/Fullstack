import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Image, Upload, message } from "antd";
import { useField } from "formik";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const Photouplode = ({ field, form }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(false); // For showing the loading state

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    form.setFieldValue(field.name, newFileList);

    // Check the upload status to ensure the image is uploaded successfully
    const latestFile = newFileList[0];
    if (latestFile && latestFile.status === "done") {
      message.success(`${latestFile.name} file uploaded successfully`);
    } else if (latestFile && latestFile.status === "error") {
      message.error(`${latestFile.name} file upload failed.`);
    }
  };

  const handleRemove = (file) => {
    // Optional: To handle file removal if required
    setFileList(fileList.filter((f) => f.uid !== file.uid));
    form.setFieldValue(
      field.name,
      fileList.filter((f) => f.uid !== file.uid)
    );
  };

  const uploadButton = (
    <div>
      {loading ? <PlusOutlined spin /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <Upload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload" // Your API endpoint for file upload
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        onRemove={handleRemove} // Handle removing the image
        showUploadList={{
          showRemoveIcon: true, // Allow the user to remove the image if needed
        }}
      >
        
        {fileList.length >= 4 ? null : uploadButton}
      </Upload>
      {previewImage && (
        <Image
          wrapperStyle={{ display: "none" }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </>
  );
};

export default Photouplode;
