
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageWithLoaderProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  containerClassName?: string;
}

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({
  src,
  alt,
  className,
  containerClassName,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {isLoading && (
        <div className="absolute inset-0 image-blur-loading" />
      )}
      <img
        src={src}
        alt={alt}
        className={cn("w-full h-full object-cover transition-opacity duration-300", 
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
};

export default ImageWithLoader;
