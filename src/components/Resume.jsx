import cv from "../assets/CV.pdf";
import { Document, Page } from 'react-pdf';

const CV = () => {
    window.location.href = "https://drive.google.com/file/d/18-X9AMvCTSyyrW99oZvtTb8LSfu5kxrf/view?usp=sharing";
    // return (
    //     <>
    //     <div>
    //         <Document file={cv}>
    //         <Page pageNumber={1} />
    //         </Document>
            
    //     </div>
    //     </>
    // );
};

export default SectionWrapper(CV, "cv");


// const CV = () => {
//     return (
//         <div>
//             <Document file={cv}>
//             <Page pageNumber={1} />
//             </Document>
//         </div>
//     );
// };