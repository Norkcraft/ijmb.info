import { Container } from './primitives';

export function Footer() {
  return <footer className="border-t border-border py-10 text-sm text-muted"><Container>© {new Date().getFullYear()} IJMB. All rights reserved.</Container></footer>;
}
