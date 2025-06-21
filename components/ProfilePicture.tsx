import Image from "next/image";

interface ProfilePictureProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

export const ProfilePicture = ({ src, alt, size = 250, className = "" }: ProfilePictureProps) => {
  return (
    <div className={`relative overflow-hidden rounded-full ${className}`} style={{ width: size, height: size }}>
      <Image 
        src={src} 
        alt={alt} 
        width={size} 
        height={size}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

// 如果您想要使用 Tailwind 类的方式，这里是另一种实现：
export const ProfilePictureTailwind = ({ src, alt, size = 250, className = "" }: ProfilePictureProps) => {
  return (
    <Image 
      src={src} 
      alt={alt} 
      width={size} 
      height={size}
      className={`rounded-full object-cover ${className}`}
    />
  );
};

// 如果您想要带边框的圆形头像：
export const ProfilePictureWithBorder = ({ src, alt, size = 250, className = "" }: ProfilePictureProps) => {
  return (
    <div className={`relative overflow-hidden rounded-full border-4 border-white/20 ${className}`} style={{ width: size, height: size }}>
      <Image 
        src={src} 
        alt={alt} 
        width={size} 
        height={size}
        className="object-cover w-full h-full"
      />
    </div>
  );
}; 