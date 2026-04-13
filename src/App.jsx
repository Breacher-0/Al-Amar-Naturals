import { useEffect, useState } from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import { useLanguage } from './hooks/useLanguage'
import MouseGlow from './components/MouseGlow'
import SwayingSilhouettes from './components/SwayingSilhouettes'
import FloatingLeaves from './components/FloatingLeaves'

function App() {
  const [mounted, setMounted] = useState(false)
  const { lang, t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="layout-main">
      
      {/* Background Image with Overlay */}
      <div className="layout-bg">
        <img 
          src="/bg.png" 
          alt="Alamar Naturals Background" 
          className="layout-bg-img"
        />
        <div className="layout-bg-overlay" />
      </div>

      <SwayingSilhouettes />
      <FloatingLeaves />
      <MouseGlow />

      <Header mounted={mounted} />
      <MainContent t={t} lang={lang} />
      <Footer mounted={mounted} t={t} lang={lang} />

    </main>
  )
}

export default App
