// Your component
import Image from 'next/image';

const MyComponent = () => {
  return (
    <div>
      <Image src="/test.jpg" alt="Your Image" width={500} height={300} />
    </div>
  );
};

export default MyComponent;
