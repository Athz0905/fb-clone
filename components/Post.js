import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/client";
import { ChatIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

const Post = ({ name, message, email, postImage, image, timestamp }) => {
  const [session] = useSession();

  return (
    <div className="flex flex-col">
      <div className="px-4 pt-5 pb-3 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <Image
            src={session.user.image}
            width={40}
            height={40}
            alt="profile-pic"
            className="rounded-full"
          />
          <div>
            <p className="font-medium ">{name}</p>

            {timestamp ? (
              <p className="text-xs text-gray-400">
                {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
            ) : (
              <p className="text-xs text-gray-400"> Loading</p>
            )}
          </div>
        </div>

        <p className="p-1 pt-2">{message}</p>
      </div>

      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postImage} objectFit="cover" layout="fill" alt="" />
        </div>
      )}

      {/* footer of post */}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon rounded-none rounded-b-2xl ">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>

        <div className="inputIcon rounded-none ">
          <ChatIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>

        <div className="inputIcon rounded-none rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
