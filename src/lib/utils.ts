import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Smooth-scrolls to a CSS selector, accounting for fixed navbar height.
 * Use this everywhere instead of element.scrollIntoView() to keep offset consistent.
 */
export function smoothScrollTo(
  e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLDivElement>,
  href: string,
  onDone?: () => void
) {
  e.preventDefault()
  const el = document.querySelector(href)
  if (el) {
    const navbarOffset = 72 // matches fixed navbar height
    const top = el.getBoundingClientRect().top + window.scrollY - navbarOffset
    window.scrollTo({ top, behavior: "smooth" })
  }
  onDone?.()
}
