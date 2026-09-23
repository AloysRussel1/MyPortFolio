import { profile } from '../portfolio';

const Footer = () => (
  <footer className="border-t border-line py-8">
    <div className="container-x flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} {profile.firstName} {profile.lastName}
      </p>
      <div className="flex gap-5">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link">
          LinkedIn
        </a>
        <a href={`mailto:${profile.email}`} className="link">
          Email
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
