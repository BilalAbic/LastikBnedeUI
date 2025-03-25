"use client"

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface FileUploadProps {
  onFileChange: (file: File | null) => void
  previewUrl: string | null
  maxSizeMB?: number
  acceptedFileTypes?: string[]
}

const FileUpload = ({ 
  onFileChange, 
  previewUrl, 
  maxSizeMB = 5, 
  acceptedFileTypes = ['image/jpeg', 'image/png', 'image/jpg'] 
}: FileUploadProps) => {
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const dropAreaRef = useRef<HTMLDivElement>(null)
  const isProcessingRef = useRef(false)

  // Clear error when previewUrl changes
  useEffect(() => {
    setError(null);
  }, [previewUrl]);

  const validateFile = (file: File): boolean => {
    setError(null)
    
    // Check file type
    if (!acceptedFileTypes.includes(file.type)) {
      setError(`Desteklenmeyen dosya türü. Lütfen ${acceptedFileTypes.map(type => type.replace('image/', '')).join(', ')} formatında bir dosya yükleyin.`)
      return false
    }
    
    // Check file size
    const fileSizeMB = file.size / (1024 * 1024)
    if (fileSizeMB > maxSizeMB) {
      setError(`Dosya boyutu çok büyük. Maksimum ${maxSizeMB}MB yükleyebilirsiniz.`)
      return false
    }
    
    return true
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Prevent duplicate processing
    if (isProcessingRef.current) return
    isProcessingRef.current = true
    
    const file = e.target.files?.[0]
    if (file && validateFile(file)) {
      onFileChange(file)
    }
    
    // Reset the input value to allow selecting the same file again
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    
    // Reset processing flag after a short delay
    setTimeout(() => {
      isProcessingRef.current = false
    }, 300)
  }

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (!isDragging) {
      setIsDragging(true)
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    
    // Prevent duplicate processing
    if (isProcessingRef.current) return
    isProcessingRef.current = true
    
    const file = e.dataTransfer.files?.[0]
    if (file && validateFile(file)) {
      onFileChange(file)
    }
    
    // Reset processing flag after a short delay
    setTimeout(() => {
      isProcessingRef.current = false
    }, 300)
  }

  const handleClick = () => {
    if (!isProcessingRef.current && fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    onFileChange(null)
  }

  return (
    <div className="space-y-2">
      <div 
        ref={dropAreaRef}
        className={`relative border ${error ? 'border-red-500' : isDragging ? 'border-accent' : 'border-gray-dark'} rounded-lg bg-secondary overflow-hidden transition-colors cursor-pointer`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={acceptedFileTypes.join(',')}
          onChange={handleFileChange}
          className="absolute opacity-0 w-0 h-0 overflow-hidden"
          aria-label="Lastik fotoğrafı yükle"
        />
        <div className="flex flex-col items-center justify-center py-6 px-4">
          {previewUrl ? (
            <div className="relative w-full h-48 mb-2">
              <Image
                src={previewUrl}
                alt="Lastik fotoğrafı"
                fill
                className="object-contain"
              />
              <button 
                type="button"
                onClick={handleRemoveImage}
                className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1 hover:bg-black/70 transition-colors"
                aria-label="Fotoğrafı kaldır"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ) : (
            <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <svg className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 8a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 22h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v14a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
          <p className="text-sm text-gray-medium text-center">
            {previewUrl ? 'Fotoğrafı değiştirmek için tıklayın' : 'Lastik fotoğrafı yüklemek için tıklayın veya sürükleyin'}
          </p>
          {!previewUrl && (
            <p className="text-xs text-gray-medium mt-1">
              PNG, JPG veya JPEG (max. {maxSizeMB}MB)
            </p>
          )}
        </div>
      </div>
      
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  )
}

export default FileUpload 