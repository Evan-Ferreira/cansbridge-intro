'use client';

import Image from 'next/image';
import { useRef } from 'react';
import html2canvas from 'html2canvas';

export default function Home() {
    const windowRef = useRef<HTMLDivElement>(null);

    const downloadAsImage = async () => {
        if (!windowRef.current) return;

        try {
            const canvas = await html2canvas(windowRef.current, {
                backgroundColor: '#C0C0C0',
                scale: 1,
            });
            const link = document.createElement('a');
            link.download = 'cansbridge-intro.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        } catch (error) {
            console.error('Error capturing image:', error);
            alert(
                'Failed to download image. Please ensure html2canvas is installed.'
            );
        }
    };

    return (
        <div
            className="size-full flex items-center justify-center w-screen h-screen"
            style={{ background: 'var(--win98-bg)', padding: '20px' }}
        >
            {/* Main Window */}
            <div
                ref={windowRef}
                className="win98-window"
                style={{
                    width: '800px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {/* Title Bar */}
                <div className="win98-titlebar">
                    <div
                        style={{
                            width: '16px',
                            height: '16px',
                            background: 'var(--win98-accent-teal)',
                            border: '1px solid var(--win98-black)',
                        }}
                    ></div>
                    <span>About Me</span>
                    <div
                        style={{
                            marginLeft: 'auto',
                            display: 'flex',
                            gap: '2px',
                        }}
                    >
                        {/* Minimize Button */}
                        <button
                            className="win98-button"
                            style={{
                                width: '16px',
                                height: '14px',
                                padding: 0,
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'center',
                                paddingBottom: '2px',
                            }}
                        >
                            <span
                                style={{
                                    fontSize: '12px',
                                    lineHeight: '1',
                                    fontWeight: '900',
                                }}
                            >
                                _
                            </span>
                        </button>
                        {/* Maximize Button */}
                        <button
                            className="win98-button"
                            style={{
                                width: '16px',
                                height: '14px',
                                padding: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <span
                                style={{
                                    fontSize: '11px',
                                    lineHeight: '1',
                                    fontWeight: '900',
                                }}
                            >
                                □
                            </span>
                        </button>
                        {/* Close Button */}
                        <button
                            className="win98-button"
                            style={{
                                width: '16px',
                                height: '14px',
                                padding: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <span
                                style={{
                                    fontSize: '10px',
                                    lineHeight: '1',
                                    fontWeight: '700',
                                }}
                            >
                                ✕
                            </span>
                        </button>
                    </div>
                </div>

                {/* Menu Bar */}
                <div className="win98-menubar">
                    <span>File</span>
                    <span>Edit</span>
                    <span>View</span>
                    <span>Help</span>
                </div>

                {/* Main Content Area */}
                <div
                    style={{
                        flex: 1,
                        padding: '4px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        overflow: 'auto',
                    }}
                >
                    {/* Header Panel */}
                    <div
                        className="panel98"
                        style={{ padding: '8px', textAlign: 'center' }}
                    >
                        <h1 style={{ fontSize: '20px', marginBottom: '4px' }}>
                            Evan Ferreira
                        </h1>
                        <p style={{ fontSize: '10px' }}>
                            4th year Queen's Commmerce
                        </p>
                    </div>

                    {/* About Me Panel */}
                    <div className="panel98" style={{ padding: '6px 32px' }}>
                        <h2
                            style={{
                                textAlign: 'center',
                                marginBottom: '6px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                            }}
                        >
                            ABOUT ME
                        </h2>
                        <p
                            style={{
                                fontSize: '10px',
                                lineHeight: '1.4',
                                textAlign: 'center',
                            }}
                        >
                            Born and raised in Etobicoke, Ontario, I'm a
                            self-taught software engineer passioante about
                            entrepreneurship, martial arts, and physics.
                        </p>
                    </div>

                    {/* Three Section Panels - Past, Present, Future */}
                    <div
                        className="h-fit"
                        style={{ display: 'flex', gap: '2px' }}
                    >
                        {/* Past Panel */}
                        <div
                            className="panel98"
                            style={{
                                flex: 1,
                                padding: '6px',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <h2
                                style={{
                                    textAlign: 'center',
                                    marginBottom: '6px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                }}
                            >
                                TALK TO ME ABOUT
                            </h2>
                            <ul
                                style={{
                                    listStylePosition: 'inside',
                                    fontSize: '10px',
                                    lineHeight: '1.4',
                                }}
                            >
                                <li>
                                    - MMA (and why Charles Oliveira is the GOAT)
                                </li>
                                <li>
                                    - Quantum mechanics and faster than light
                                    travel
                                </li>
                                <li>
                                    - Suits (I've seen every episode at least 3
                                    times)
                                </li>
                                <li>
                                    - Anything related to
                                    startups/entrepreneurship
                                </li>
                            </ul>
                        </div>

                        {/* Present Panel */}
                        <div
                            className="panel98"
                            style={{
                                flex: 1,
                                padding: '6px',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <h2
                                style={{
                                    textAlign: 'center',
                                    marginBottom: '6px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                }}
                            >
                                FUN FACTS
                            </h2>
                            <ul
                                style={{
                                    listStylePosition: 'inside',
                                    fontSize: '10px',
                                    lineHeight: '1.4',
                                }}
                            >
                                <li>
                                    - I'm half Hakka Chinese and half Portuguese
                                </li>
                                <li>
                                    - I've wrestled competitively for 6 years
                                </li>
                                <li>- Pho is my favourite food</li>
                                <li>
                                    - I almost got sued by Queen's University
                                    (less fun of a fact)
                                </li>
                                <li>
                                    - This infographic was built in Cursor
                                    (because I thought it would be easier than
                                    Canva?)
                                </li>
                            </ul>
                        </div>

                        {/* Future Panel */}
                        <div
                            className="panel98"
                            style={{
                                flex: 1,
                                padding: '6px',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <h2
                                style={{
                                    textAlign: 'center',
                                    marginBottom: '6px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                }}
                            >
                                ASIA GOALS
                            </h2>
                            <ul
                                style={{
                                    listStylePosition: 'inside',
                                    fontSize: '10px',
                                    lineHeight: '1.4',
                                }}
                            >
                                <li>- Land a UI/UX design internship</li>
                                <li>
                                    - Work in Japan to learn about their
                                    craftsmanship culture
                                </li>
                                <li>- Learn Japanese</li>
                                <li>- Visit 3 different Asian countries</li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Photos/Events Panel */}
                    <div className="panel98" style={{ padding: '6px' }}>
                        <div
                            style={{
                                display: 'flex',
                                gap: '4px',
                                width: '100%',
                            }}
                        >
                            {/* Photos */}
                            {[
                                '/hussein_getting_cooked.PNG',
                                '/birthday.png',
                                '/pho.jpg',
                                '/sf.JPG',
                                '/taiv.JPG',
                            ].map((src, i) => (
                                <div
                                    key={i}
                                    className="win98-sunken"
                                    style={{
                                        flex: 1,
                                        aspectRatio: '1',
                                        overflow: 'hidden',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Image
                                        src={src}
                                        alt={`Photo ${i + 1}`}
                                        width={200}
                                        height={200}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Status Bar */}
                <div className="win98-statusbar">
                    <span>Ready</span>
                </div>
            </div>

            {/* Download Button & Social Icons - Bottom Right */}
            <div className="fixed bottom-4 right-4 flex gap-2 items-center opacity-50 transition-opacity">
                {/* Download Button */}
                <button
                    onClick={downloadAsImage}
                    className="flex items-center justify-center w-4 h-4 cursor-pointer transition-transform hover:rotate-[5deg]"
                    title="Download as image"
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black hover:text-gray-800 transition-colors"
                    >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                </button>
                {/* GitHub Icon */}
                <a
                    href="https://github.com/Evan-Ferreira/cansbridge-intro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-4 h-4 cursor-pointer transition-transform hover:rotate-[5deg]"
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-black hover:text-gray-800 transition-colors"
                    >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                </a>

                {/* Website Icon */}
                <a
                    href="https://evanferreira.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-4 h-4 cursor-pointer transition-transform hover:rotate-[5deg]"
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black hover:text-gray-800 transition-colors"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                </a>

                {/* LinkedIn Icon */}
                <a
                    href="https://www.linkedin.com/in/evan-ferreira/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-4 h-4 cursor-pointer transition-transform hover:rotate-[5deg]"
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-black hover:text-gray-800 transition-colors"
                    >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                </a>
            </div>
        </div>
    );
}
