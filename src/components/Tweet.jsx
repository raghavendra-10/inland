import React, { useState } from "react";
import { AiOutlineEllipsis } from "react-icons/ai";

import ExpandedImage from "./ExpandedImage";

// Import toast for notifications
import { Link } from "react-router-dom";
const Tweet = ({

  username,
  content,
  timestamp,

  tweetPhotoURL,
  authorId,
 
}) => {
  const [showOptions, setShowOptions] = useState(false);
 

  const [isTweetPhotoExpanded, setIsTweetPhotoExpanded] = useState(false);

  const handleOptionsClick = () => {
    setShowOptions(!showOptions);
  };

  



  const handleTweetPhotoClick = () => {
    setIsTweetPhotoExpanded(!isTweetPhotoExpanded);
  };




  return (
    <div
      className=
         "bg-green-100 bg-white p-2 sm:p-5 border rounded-lg shadow-md transition duration-50 ease-out hover:ease-in hover:border-navy-300 hover:border-2 mb-4"
    >
      <div className="flex items-start">
      
        <div className="flex-grow">
          <div className="flex items-center justify-between">
            <p className="text-gray-800 text-[14px] sm:text-md font-semibold">
            <Link to={`/profile/${authorId}`}> {username}</Link>
            </p>
            <div className="flex flex-col items-center">
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={handleOptionsClick}
              >
                <AiOutlineEllipsis size={25} />
              </button>
            
          
            </div>
          </div>
          <div className="flex-grow w-full">
            <p className="text-gray-700 mt-1 break-words">{content}</p>
            {tweetPhotoURL && (
              <img
                src={tweetPhotoURL}
                alt="Tweet"
                className="mt-2 rounded-md max-h-72 cursor-pointer"
                onClick={handleTweetPhotoClick}
              />
            )}
            {isTweetPhotoExpanded && (
              <ExpandedImage
                imageURL={tweetPhotoURL}
                onClose={handleTweetPhotoClick}
              />
            )}
          </div>
          <p className="text-gray-600 text-sm mt-2">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
