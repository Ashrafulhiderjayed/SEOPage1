import { useState } from 'react';

function FileCard() {
  const [fileCount, setFileCount] = useState(0);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    setFileCount(files.length);
  };

  return (
    <div className="file-card">
      <input type="file" multiple onChange={handleFileUpload} />
      {fileCount > 0 && <p>Number of files: {fileCount}</p>}
    </div>
  );
}

export default FileCard;
