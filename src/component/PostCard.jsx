import React from "react";
import appwriteServices from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full p-4 bg-gray-100 rounded-xl">
        <div className="w-full flex justify-center mb-4">
          <img
            // src={`https://cloud.appwrite.io/v1/storage/buckets/66c6dbf2000258c1ab3a/files/${featuredImage}/view?project=66c6d8130004f9ea1158&project=66c6d8130004f9ea1158&mode=admin`}
            src={appwriteServices.getFilePreview(featuredImage)}

            alt={title}
            className="h-40 rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold flex justify-center">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
