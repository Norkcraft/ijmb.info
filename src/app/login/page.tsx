import { makeMetadata } from '@/lib/seo/metadata';
import { Button, Container, Section } from '@/components/ui/primitives';

export const metadata = makeMetadata(
  'Login',
  'Student portal login will be available after registration system goes live.',
  '/login'
);

export default function LoginPage() {
  return (
    <Section>
      <Container>
        <div className="surface max-w-2xl p-8">
          <h1 className="text-4xl font-bold">Login</h1>
          <p className="mt-3 text-muted">
            Student portal login will be available after registration system goes live.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/ijmb-registration">Register</Button>
            <Button href="/" variant="secondary">
              Back Home
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
