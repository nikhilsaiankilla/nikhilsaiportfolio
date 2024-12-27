const { v2 } = require('cloudinary');
const fs = require('fs');

v2.config({
    cloud_name: "do5y2mtpk",
    api_key: "599354484592399",
    api_secret: "ZdtI_PYRJapF-4OocHFeEaMKtTI",
});

const uploadOnCloudinary = async (localFilePath) => {
    if (!localFilePath) return null; 

    try {
        const response = await v2.uploader.upload(localFilePath, {
            resource_type: "auto",
            folder: "portfolio",
        });
        
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }

        return response; 
    } catch (error) {
        console.error("Error uploading file to Cloudinary:", error.message || error);
        
        try {
            if (fs.existsSync(localFilePath)) {
                fs.unlinkSync(localFilePath);
            }
        } catch (deleteError) {
            console.error("Error deleting local file after upload failure:", deleteError.message || deleteError);
        }
        
        return null;
    }
};

module.exports = { uploadOnCloudinary };
