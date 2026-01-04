import Image from 'next/image';

export default function Home() {
    return (
        <div
            className="size-full flex items-center justify-center"
            style={{ background: 'var(--win98-bg)', padding: '20px' }}
        >
            {/* Main Window */}
            <div
                className="win98-window"
                style={{
                    width: '800px',
                    height: '600px',
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
                    <div style={{ display: 'flex', gap: '2px', flex: 1 }}>
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
                                    - I've wrestled competitively for 6 years
                                </li>
                                <li>- Pho is my favourite food</li>
                                <li>
                                    - I almost got sued by Queen's University
                                    (less fun of a fact)
                                </li>
                                <li>- I've never tried McDonald's</li>
                                <li>
                                    - This infographic was built in Cursor
                                    (because I thought it'd be easier than
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
                                justifyContent: 'center',
                            }}
                        >
                            {/* Photo placeholder boxes */}
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                    key={i}
                                    className="win98-sunken"
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        background: '#ffffff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '9px',
                                        color: 'var(--win98-edge)',
                                    }}
                                >
                                    {i}
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
        </div>
    );
}
