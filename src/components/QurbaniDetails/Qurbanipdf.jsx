// Import the main component
import { Viewer, Worker } from "@react-pdf-viewer/core"; // install this library
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"; // install this library
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import React, { useState } from "react";
import pdfFile from "../../pdf/qurbani-gideling.pdf";


const Qurbanipdf = () => {
  const [defoultPdfFile] = useState(pdfFile);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className='container'>
      {defoultPdfFile && (
        <>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <Viewer
              fileUrl={defoultPdfFile}
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
        </>
      )}
    </div>
  );
};

export default Qurbanipdf;
