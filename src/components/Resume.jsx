import cv from "../assets/CV.pdf";
import { Document, Page } from 'react-pdf';

const CV = () => {
    return (
        <>
        <div>
            <Document file={cv}>
            <Page pageNumber={1} />
            </Document>
        </div>
        </>
    );
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