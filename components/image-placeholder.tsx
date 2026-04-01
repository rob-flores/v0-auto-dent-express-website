import { ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImagePlaceholderProps {
  label?: string
  className?: string
  aspectRatio?: "square" | "video" | "wide" | "portrait"
}

export function ImagePlaceholder({ 
  label = "Add your image here", 
  className,
  aspectRatio = "video"
}: ImagePlaceholderProps) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
    portrait: "aspect-[3/4]"
  }

  return (
    <div 
      className={cn(
        "bg-muted border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center gap-3 text-muted-foreground",
        aspectClasses[aspectRatio],
        className
      )}
    >
      <ImageIcon className="h-12 w-12" />
      <span className="text-sm font-medium text-center px-4">{label}</span>
    </div>
  )
}
