import logoImg from '../assets/alamar-logo.png';

export default function Header({ mounted }) {
  return (
    <header className={`header-nav w-full ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
      <h1 className="sr-only">Alamar Naturals</h1>
      <img src={logoImg} alt="Alamar Naturals Logo" className="header-logo-img w-full mix-blend-screen" />
    </header>
  );
}
