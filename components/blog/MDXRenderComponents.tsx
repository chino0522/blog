import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ReactNode } from 'react';

const MDXRenderComponents = {
    h1: ({ ...props }) => (
        <h1 className="text-4xl font-bold mb-6 text-primary" {...props} />
    ),
    h2: ({ ...props }) => (
        <h2 className="text-3xl font-semibold mt-8 mb-4 text-primary-white" {...props} />
    ),
    h3: ({ ...props }) => (
        <h3 className="text-2xl font-medium mt-6 mb-3 text-primary-white" {...props} />
    ),
    p: ({ ...props }) => (
        <p className="text-base leading-7 mb-4 text-foreground" {...props} />
    ),
    a: ({ ...props }) => (
        <a
            className="underline hover:no-underline hover:text-primary-hover cursor-pointer transition-colors text-primary"
            {...props}
        />
    ),
    ul: ({ ...props }) => (
        <ul className="list-disc pl-6 mb-4 text-foreground" {...props} />
    ),
    ol: ({ ...props }) => (
        <ol className="list-decimal pl-6 mb-4 text-foreground" {...props} />
    ),
    li: ({ ...props }) => (
        <li className="mb-2 text-foreground" {...props} />
    ),
    code: ({ children, className, ...props }: { children: ReactNode; className?: string }) => {
        // Extract language from className (e.g., "language-javascript")
        const language = className?.replace(/language-/, '') || 'text';

        const isInline = !className?.includes('language-');
        if (isInline) {
            return (
                <code
                    className="bg-secondary-bg text-orange-400 px-1 py-0.5 rounded font-mono"
                    {...props}
                >
                    {children}
                </code>
            );
        }

        return (
            <SyntaxHighlighter
                language={language}
                style={oneDark}
                customStyle={{
                    margin: '5px 0',
                    padding: '10px',
                    borderRadius: '0.5rem',
                    backgroundColor: '#1a2233',
                    fontFamily: 'var(--font-geist-mono), monospace',
                }}
                codeTagProps={{
                    className: 'text-sm',
                }}
                {...props}
            >
                {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
        );
    },
    blockquote: ({ ...props }) => (
        <blockquote
            className="border-l-4 border-primary pl-4 italic mb-4 text-foreground"
            {...props}
        />
    ),
    img: ({ ...props }) => (
        <img
            className="max-w-full h-auto rounded-lg mb-4 border border-primary-gray"
            {...props}
        />
    ),
    hr: ({ ...props }) => (
        <hr className="my-8 border-primary-gray" {...props} />
    ),
};

export { MDXRenderComponents };