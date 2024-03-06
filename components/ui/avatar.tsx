"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"

const AvatarRoot = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
AvatarRoot.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

const avatarRootVariants = cva("", {
  variants: {
    size: {
      default: "size-10",
      sm:"size-8",
      lg:"size-20",
      xl:"size-24"
    }
  },
  defaultVariants: {
    size: "default"
  }
})

const avatarBorderVariants = cva("absolute rounded-full bg-gradient-to-r from-[#78d993] to-[#e087ff]", {
  variants: {
    size: {
      default: "-inset-0.5",
      sm:"-inset-0.5",
      lg:"-inset-1",
      xl:"-inset-1"
    },
    borderColor: {
      none: "inset-0",
      primary:"from-[#78d993] to-[#e087ff] animate-spin",
      secondary:"from-blue-500 via-sky-700 to-sky-200 animate-none",
    },
  },
  defaultVariants: {
    size: "default",
    borderColor: 'primary'
  }
})

type AvatarVariants = VariantProps< typeof avatarRootVariants>
type AvatarBorderVariants = VariantProps< typeof avatarBorderVariants>

interface AvatarProps {
  imgUrl: string
  userName: string
  fallbackText: string
}

const Avatar = ({ imgUrl, userName, fallbackText, size, borderColor }: AvatarProps & AvatarVariants & AvatarBorderVariants) => {
  return (
    <div className="relative inline-block">
      <div className={cn(avatarBorderVariants({size, borderColor}))}/>
      <AvatarRoot className={cn(avatarRootVariants({ size }))}>
        <AvatarImage src={imgUrl} alt={`Avatar for ${userName}`} className="bg-transparent border border-purple-900 rounded-full" />
        <AvatarFallback className="bg-transparent border border-purple-900 rounded-full">{fallbackText}</AvatarFallback>
      </AvatarRoot>
    </div>
  )
}

export { AvatarRoot, AvatarImage, AvatarFallback, Avatar }
export type { AvatarVariants, AvatarBorderVariants}