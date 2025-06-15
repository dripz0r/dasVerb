// app/docs/(docs)/page.tsx
//
// DocsPage is the main entry point for the documentation section (/docs).
// Renders the DocsLayout and the main PageContent (MDX) for the docs homepage.
// All docs pages use DocsLayout for consistent navigation and style.

"use client";
import { DocsLayout } from "../../components/layout/DocsLayout";
import PageContent from "./PageContent.mdx";

export default function DocsPage() {
  return (
    <DocsLayout>
      {/* Main docs homepage content (MDX) */}
      <PageContent />
    </DocsLayout>
  );
} 