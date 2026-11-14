import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000/api/v1';

export default function App() {
  const [apiStatus, setApiStatus] = useState<'checking' | 'online' | 'offline'>('checking');
  useEffect(() => {
    const controller = new AbortController();
    fetch(`${API}/health`, { signal: controller.signal })
      .then((response) => { if (!response.ok) throw new Error('API unavailable'); setApiStatus('online'); })
      .catch(() => { if (!controller.signal.aborted) setApiStatus('offline'); });
    return () => controller.abort();
  }, []);

  return <main className="shell">
    <header className="topbar"><div className="brand-mark">JW</div><div><strong>Job Workspace</strong><span>Personal command centre</span></div><div className="status">API: {apiStatus}</div></header>
    <section className="welcome"><p className="eyebrow">YOUR PRIVATE WORKSPACE</p><h1>Make your job search<br/><em>intentional.</em></h1><p className="intro">One place to manage opportunities, applications, resumes, recruiter conversations and follow-ups.</p></section>
    <section className="grid" aria-label="Workspace modules">
      {['Applications','Job pipeline','Resume studio','Recruiters','Inbox & outreach','Follow-ups'].map((item, index) => <article className="module" key={item}><span className="module-number">0{index + 1}</span><h2>{item}</h2><p>{index === 0 ? 'Track every opportunity from saved to outcome.' : 'Coming in the next development phases.'}</p><span className="module-state">FOUNDATION</span></article>)}
    </section>
    <footer>Private by design · Human approval required for external actions</footer>
  </main>;
}
