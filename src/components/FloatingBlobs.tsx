interface FloatingBlobsProps {
  blobs: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    color: string;
    darkColor: string;
    delay?: string;
  }[];
}

{/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
	<div className="absolute -top-5 -right-5 w-80 h-80 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-50 animate-blob" />
	<div className="absolute -bottom-10 -right-40 w-80 h-80 bg-yellow-400 dark:bg-yellow-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-50 animate-blob animation-delay-2000" />
	<div className="absolute top-40 -right-40 w-80 h-80 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-50 animate-blob animation-delay-4000" />
</div> */}

const FloatingBlobs: React.FC<FloatingBlobsProps> = ({ blobs }) => {

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-1000"
    >
      {blobs.map((blob, index) => (
        <div
          key={index}
          className={`absolute w-80 h-80 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl dark:opacity-50 opacity-90 animate-blob ${
            blob.delay ? `animation-delay-${blob.delay}` : ""
          }`}
          style={{
            top: blob.top,
            right: blob.right,
            bottom: blob.bottom,
            left: blob.left,
            backgroundColor: blob.color,
          }}
        />
      ))}
    </div>
  );

};

export default FloatingBlobs;