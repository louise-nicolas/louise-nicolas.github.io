import './Button.css';

export function Button({text, link, linkTarget}) {
    return (
        <>
            <div className="ln-button">
                <a className="ln-button__link" href={link} target={linkTarget}> {text}
                    <div className="ln-button__blobs">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </a>
                <svg className="ln-button__svg" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                                           result="goo"></feColorMatrix>
                            <feBlend in="SourceGraphic" in2="goo"></feBlend>
                        </filter>
                    </defs>
                </svg>
            </div>
        </>
    );
}