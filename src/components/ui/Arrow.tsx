export function Arrow({ down = false }: { down?: boolean }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={down ? { transform: "rotate(90deg)" } : undefined}><path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.3" /></svg>;
}
