import { uploadHandler } from "./FireBaseImageUploader";

const editorObject = {
  height: 500,
  menubar: false,
  plugins: "lists link image  autosave code paste code wordcount imagetools",

  toolbar:
    " formatselect | " +
    "bold italic backcolor | alignleft aligncenter " +
    "alignright alignjustify | bullist numlist outdent indent | " +
    "image code imagetools",
  content_style:
    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
  branding: false,
  image_caption: true,
  block_unsupported_drop: true,
  paste_retain_style_properties: "none",
  paste_data_images: true,

  images_file_types: "jpg,jpeg,png,webp",
  images_upload_handler: uploadHandler,
  automatic_uploads: true,

  image_advtab: true,
};

export default editorObject;
