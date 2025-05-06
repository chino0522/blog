"use client"

import Giscus from '@giscus/react';

export default function Guestbook() {
    return (
        <section className="mb-12 flex flex-col gap-2">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Guestbook</h2>
            <div className="p-4 rounded-lg">
                <Giscus
                    repo="chino0522/blog"
                    repoId="R_kgDOOkBjhw"
                    category="Guestbook Comments"
                    categoryId="DIC_kwDOOkBjh84Cp02V"
                    mapping="specific"
                    term="Guestbook"
                    strict="1"
                    reactionsEnabled="1"
                    emitMetadata="0"
                    inputPosition="top"
                    theme="transparent_dark"
                    lang="en"
                    loading="lazy"
                />
            </div>
        </section>
    )
}