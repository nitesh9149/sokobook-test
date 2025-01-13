import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="pt-[calc(var(--navbar-height))]">
      <Container>
        <div className="flex flex-col items-center justify-center gap-6 h-[28rem]">
          <h1 className="text-textPrimary font-semibold text-[10rem] leading-[9rem] pb-6">
            404
          </h1>
          <p className="text-textSecondary text-3xl text-center">
            This page could not be found
          </p>
          <Link href="/">
            <Button className="flex gap-2 items-center py-2 sm:py-2 2xl:py-2">
              Back to home
            </Button>
          </Link>
        </div>
      </Container>
    </main>
  );
}
