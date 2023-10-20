import React from 'react'

export default function ServicesLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <>
        <main>
            {children}
        </main>
    </>
  )
}
