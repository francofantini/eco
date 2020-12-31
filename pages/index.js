export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 flex flex-col items-center justify-center">
                <h1 className="text-6xl text-center mb-2">Welcome to Eco!</h1>

                <p className="text-center text-xl p-2">
                    Get started by navigating to{" "}
                    <a href="/api">
                        <code className="bg-gray-100 dark:bg-gray-700 rounded p-1 font-mono">/api</code>
                    </a>
                </p>
                <p className="p-2 text-center">Eco is a service to test your REST client&apos;s requests. It provides a single endpoint to test all REST verbs.</p>

                <a
                    className="mt-10"
                    href="https://www.producthunt.com/posts/eco-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-eco-2"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=279606&theme=dark"
                        alt="Eco - Test your REST client's requests with a single echo endpoint | Product Hunt"
                        style={{ width: "250px", height: "54px" }}
                        width="250"
                        height="54"
                    />
                </a>
            </main>

            <footer className="border-t flex items-center justify-center py-4">
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-sm">
                    Powered by
                    <svg role="img" aria-label="Vercel Inc." height="20" viewBox="0 0 283 64" className="h-4 ml-2 fill-current text-black dark:text-white">
                        <path d="M37 0l37 64H0L37 0zM159.6 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7h28.3c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM267.3 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7H267c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM219.3 28.3l6.8-3.9c-3.2-5-8.9-7.8-15.8-7.8-10.9 0-18.5 7.2-18.5 17.5s7.6 17.5 18.5 17.5c6.9 0 12.6-2.8 15.8-7.8l-6.8-3.9c-1.8 3-5 4.7-9 4.7-6.3 0-10.5-4.2-10.5-10.5s4.2-10.5 10.5-10.5c3.9 0 7.2 1.7 9 4.7zM282.3 5.6h-8v45h8v-45zM128.5 5.6h-9.2L101.7 36 84.1 5.6h-9.3L101.7 52l26.8-46.4zM185.1 25.8c.9 0 1.8.1 2.7.3v-8.5c-6.8.2-13.2 4-13.2 8.7v-8.7h-8v33h8V36.3c0-6.2 4.3-10.5 10.5-10.5z" />
                    </svg>
                </a>
            </footer>
        </div>
    );
}
