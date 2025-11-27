export function CoinIcon({props}) {
    return (
        <svg
            fill="#000000"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            id="coin"
            data-name="Flat Line"
            xmlns="http://www.w3.org/2000/svg"
            className="icon flat-line"
            {...props}
        >
            <circle
                id="secondary"
                cx={12}
                cy={12}
                r={9}
                style={{
                    fill: "rgb(44, 169, 188)",
                    strokeWidth: 2,
                }}
            />
            <path
                id="primary"
                d="M14,15.12A2.82,2.82,0,0,1,12,16c-1.77,0-3.2-1.79-3.2-4S10.23,8,12,8a2.89,2.89,0,0,1,2.12,1"
                style={{
                    fill: "none",
                    stroke: "rgb(0, 0, 0)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                }}
            />
            <path
                id="primary-2"
                data-name="primary"
                d="M8,12h2m2-9a9,9,0,1,0,9,9A9,9,0,0,0,12,3Z"
                style={{
                    fill: "none",
                    stroke: "rgb(0, 0, 0)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                }}
            />
        </svg>
    );
}
