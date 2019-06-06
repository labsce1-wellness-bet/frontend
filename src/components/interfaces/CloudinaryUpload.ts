export interface CloudinaryUpload {
  fileOptions: {
    publicId: string;
    uploadPreset: string;
    [key: string]: any;
  };
}
