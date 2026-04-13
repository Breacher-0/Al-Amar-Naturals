import DropletAnimation from './DropletAnimation';

export default function MainContent({ t, lang }) {
  return (
    <main className="hero-section">
      <div className="hero-content">
        <p className="hero-subtitle-text">
          {t('subtitle')}
        </p>
        <h2 className="hero-title-main" style={{ fontFamily: 'TrajanSansPro-Semibold' }}>
          {t('title')}
        </h2>
      </div>
      
      <div className="quote-container ambient-border">
        <p className="quote-body whitespace-pre-line">
          {t('quote')}
        </p>
        <DropletAnimation />
      </div>
    </main>
  );
}
