import React from "react"
import Link from "next/link"

interface LinkProps {
  children: React.ReactNode
  to: string
}

const AppLink: React.FC<LinkProps> = ({ children, to }) => {
  const isExternal = to.startsWith("http")

  return (
    <Link
      href={to}
      className="underline text-f-pink"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  )
}

export default AppLink
