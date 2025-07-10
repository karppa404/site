// components/app-sidebar.tsx
'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface NavItem {
  name: string
  href: string
}

const navigation: NavItem[] = [
  { name: 'Blog Posts', href: '/blog' },
  { name: 'Projects', href: '/projects' },
  { name: 'Photos', href: '/photos' },

]

export default function AppSidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:flex-col md:w-48 md:h-screen   border-r border-border/30">
        <div className="p-6">
          {/* Avatar */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-2">
              <span className="text-lg font-mono">👓</span>
            </div>
            <span className="text-sm text-muted-foreground">user.name</span>
          </div>
          
          {/* Social Icons */}
          <div className="flex justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
              <span className="text-sm">📧</span>
            </div>
            <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
              <span className="text-sm">💻</span>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </aside>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          variant="default"
          size="sm"
          onClick={toggleMobileMenu}
          className="p-2 hover:bg-accent"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Full-Screen Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm">
          <div className="flex flex-col h-full">
            {/* Header with close button */}
            <div className="flex justify-between items-center p-4 border-b border-border/30">
              <h1 className="text-xl font-semibold text-end w-full">Menu</h1>

            </div>
            
            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-8">
              <div className="space-y-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={toggleMobileMenu}
                    className="block text-2xl font-medium text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
            
            {/* Footer */}
            <div className="p-6 border-t border-border/30">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-lg font-mono">👓</span>
                </div>
                <span className="text-sm text-muted-foreground">user.name</span>
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                    <span className="text-sm">📧</span>
                  </div>
                  <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                    <span className="text-sm">💻</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}