export interface CloudinaryUpload {
  base64ImageData: string;
  fileOptions: {
    publicId: string;
    uploadPreset: string;
    [key: string]: any;
  };
}
