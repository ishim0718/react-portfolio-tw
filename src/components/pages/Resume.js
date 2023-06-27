import React from 'react';

const PDF_FILE_URL = 'https://localhost:3000/sample_resume.pdf'

export default function Resume() {
  const downloadFileAtURL = (url) => {
    fetch(url)
      .then(response => response.blob())
      .then(blob=>{
        const blobURL = window.URL.createObjectURL(new Blob([blob]));   
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = blobURL;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <div>
      <h1 className='page-header'>Resume</h1>
        <div className='resume'>
          <ul>Frontend Proficiency
              <li>React</li>
              <li>HTML</li>
              <li>Bootstrap</li>
          </ul>
          <ul>Backend Proficiency
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
          </ul>
        </div>
        <button className='resume' onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}}>Download Resume</button>
    </div>
  );
}
