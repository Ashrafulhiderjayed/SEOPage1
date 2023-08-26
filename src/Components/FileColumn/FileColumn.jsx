// import React from 'react';

import FileCard from "../FileCard/FileCard";

function FileColumn() {
  return (
    <div className="file-column">
      <h2>Column</h2>
      {[1, 2, 3, 4, 5].map((index) => (
        <FileCard key={index} />
      ))}
    </div>
  );
}

export default FileColumn;
