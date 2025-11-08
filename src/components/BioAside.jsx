import React, { useRef, useEffect, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';

const BioAside = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);

  // focus the modal when opened for accessibility
  useEffect(() => {
    if (open) {
      modalRef.current?.focus();
    }
  }, [open]);

  return (
    <aside className="bio-aside" aria-hidden={!document?.body?.classList?.contains('bio-theme')}>
      <div className="bio-card" role="complementary">
        <h4 className="bio-title">{t('bio.title', 'Bio')}</h4>
        <p className="bio-text"><Trans i18nKey="bio.summary">Developer with a background in biology, passionate about applying computational thinking to solve real problems.</Trans></p>

        {/* Informational 'in development' paragraph with badge */}
        <p className="bio-dev"><span className="dev-badge" aria-hidden>🛠️</span> {t('bio.inDevelopment', 'This panel is under development. In the future I will showcase projects and interesting information about my interest in biology here.')}</p>

        <p className="bio-small">{t('bio.hint', 'Toggle the bio theme to see more')}</p>

        <div style={{marginTop:8, display: 'flex', gap: 8, justifyContent: 'center'}}>
          <a href="mailto:gemordz@gmail.com" className="bio-link">{t('bio.contact', 'Contact')}</a>
          <button className="bio-cta" onClick={() => setOpen(true)}>{t('bio.showProgress', 'See progress')}</button>
        </div>

        {/* Modal (simple, accessible) */}
        {open && (
          <div className="bio-modal-overlay" role="presentation" onMouseDown={() => setOpen(false)}>
            <div
              className="bio-modal"
              role="dialog"
              aria-modal="true"
              aria-label={t('bio.modalTitle', 'Progress & roadmap')}
              tabIndex={-1}
              ref={modalRef}
              onMouseDown={(e) => e.stopPropagation()}
            >
              <header className="bio-modal-header">
                <h3>{t('bio.modalTitle', 'Progress & roadmap')}</h3>
                <button className="bio-modal-close" onClick={() => setOpen(false)} aria-label={t('bio.modalClose', 'Close')}>×</button>
              </header>
              <div className="bio-modal-body">
                <p>{t('bio.modalBody', 'I am working on adding a showcase of projects, case studies and notes about where biology and software intersect. Check back soon — I will add links, images and small demos here.')}</p>
              </div>
              <footer className="bio-modal-footer">
                <button className="bio-modal-action" onClick={() => setOpen(false)}>{t('bio.modalClose', 'Close')}</button>
              </footer>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default BioAside;
