import React from 'react';

// Define the props interface if you plan to pass props
interface BlogCardProps {
  title: string;
  description: string;
  imageSrc: string;
  icons: React.ReactNode[]; // Array of React nodes to pass icons
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, imageSrc, icons }) => {
  return (
    <>
    <div>
       
    </div>
    </>
  );
};

export default BlogCard;
