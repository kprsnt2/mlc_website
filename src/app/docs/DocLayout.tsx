'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

interface DocLayoutProps {
    content: string;
    title: string;
}

const sidebarLinks = [
    { href: '/docs/getting-started', label: 'Getting Started' },
    { href: '/docs/tools', label: 'Tools Reference' },
    { href: '/docs/skills', label: 'Skills System' },
    { href: '/docs/agents', label: 'Agents Guide' },
    { href: '/docs/configuration', label: 'Configuration' },
    { href: '/docs/troubleshooting', label: 'Troubleshooting' },
    { href: '/docs/changelog', label: 'Changelog' },
];

export default function DocLayout({ content, title }: DocLayoutProps) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex gap-8">
                {/* Sidebar */}
                <aside className="hidden lg:block w-64 flex-shrink-0">
                    <nav className="sticky top-24 space-y-1">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                            Documentation
                        </p>
                        {sidebarLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-[#171717] rounded-lg transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </aside>

                {/* Content */}
                <main className="flex-1 min-w-0">
                    <article className="prose max-w-none">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {content}
                        </ReactMarkdown>
                    </article>
                </main>
            </div>
        </div>
    );
}
