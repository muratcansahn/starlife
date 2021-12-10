import { Spinner } from "react-bootstrap";
import Image from "next/image";

const LoadingSpinner = () => {
  return (
    <div className="loading-wrapper d-flex">
      <div className="m-auto loading-container d-flex flex-column">
        <Image
          className="loading-logo my-4 mx-auto"
          src="/images/sealife-yacht.jpg"
          width={150}
          height={200}
        />
        <h1 className="text-center text-dark mt-4">Sealife Yacht</h1>
        <Spinner
          className="my-4 mx-auto"
          animation="border"
          variant="primary"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
};

export default LoadingSpinner;
