// components/ContentContainer.tsx

import React from "react";

interface ContentContainerProps {
  children: React.ReactNode;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {children}
    </div>
  );
};

export default ContentContainer;
