import Image from 'next/image'

interface ImagePlaceholderProps {
  src: string
  alt: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
}

const ImagePlaceholder = ({ src, alt, className, fill, width, height }: ImagePlaceholderProps) => {
  // Use a placeholder image if the src is not available
  const imageSrc = src || '/images/placeholder.jpg'
  
  // Handle errors by showing a placeholder
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    target.src = '/images/placeholder.jpg'
  }
  
  if (fill) {
    return (
      <div className={`relative ${className || ''}`}>
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover"
          onError={handleError}
        />
      </div>
    )
  }
  
  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width || 300}
      height={height || 200}
      className={className}
      onError={handleError}
    />
  )
}

export default ImagePlaceholder 