import React, { useState} from "react";

import { UserAuth } from "../context/AuthContext";

import TweetsList from "./TweetsList";
import TweetForm from "./TweetForm";


import "react-toastify/dist/ReactToastify.css";
import {BiMessageDetail} from "react-icons/bi"
import Header from "./Header";
import Footer from "./Footer";
const Dashboard = () => {
  const { user} = UserAuth();

  const [showTweetForm, setShowTweetForm] = useState(false);



 


  const handleTweetClick = () => {
  
      // Allow the user to tweet
      setShowTweetForm(true);
  
  };
  return (
    <div>
        <Header/>
    <div className="flex">
      <div className="flex-grow p-4 max-w-screen ">
        <h1 className="text-center text-xl">Fishries Problems News Feeds</h1>

        <div className="mb-8 pb-8  pt-8">
          <TweetsList />
          <div className="text-center mt-4"></div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 flex justify-around">
          
         
          
        
          <div
            className="fixed text-white cursor-pointer text-xl px-3 py-3 bottom-[100px] right-4 transform translate-y-1/2 bg-blue-400 shadow-md rounded-md hover:bg-blue-600"
            onClick={handleTweetClick}
          >
            <button className="h-2">
              <BiMessageDetail size={19} />
            </button>
          </div>
        </div>
      </div>

      {showTweetForm && (
        <div className="fixed backdrop-blur-md inset-0 flex justify-center items-center bg-gray-800 z-50">
          <div className="bg-white p-4 rounded-md shadow-md w-2/3">
            <TweetForm user={user} onClose={() => setShowTweetForm(false)} />
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </div>
  );
};

export default Dashboard;
