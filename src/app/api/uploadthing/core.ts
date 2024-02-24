import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
 
const f = createUploadthing();
 
const auth = (req: Request) => ({ id: "userProfile" });
export const ourFileRouter = {
  
  imageUploader: f({ image: { maxFileSize: "8MB" } })
   
    .middleware(async ({ req }) => {
  
      const user = await auth(req);
 
      
      if (!user) throw new UploadThingError("Unauthorized");
 
      
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      
      console.log("Upload complete for userId:", metadata.userId);
 
      console.log("file url", file.url);
 
     
      return { uploadedBy: metadata.userId };
    }),

    profilePicture: f(["image"])
    .middleware(({ req }) => auth(req))
    .onUploadComplete((data) => { }),

    mediaPost: f({
      image: { maxFileSize: "8MB"},
      video: { maxFileSize: "256MB"},
    })
      .middleware(({ req }) => auth(req))
      .onUploadComplete((data) => console.log("file", data)),


} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;