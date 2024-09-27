interface PrimaryHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    text: string;
    data?: string;
    reduceBelow?: number;
    maxFontSize?: number;
    minFontSize?: number;
    className?: string;
}

const PrimaryHeading: React.FC<PrimaryHeadingProps> = ({
    text,
    data,
    reduceBelow = 1024,
    maxFontSize = 40,
    minFontSize = 25,
    className = '',
    ...props
}) => {
    const sizeReducer = (100 / reduceBelow) * maxFontSize;

    return (
        <h2 data-aos='zoom-in'
            {...props}
            style={{ fontSize: `clamp(${minFontSize}px, ${sizeReducer}vw, ${maxFontSize}px)` }}
            className={`${className} font-normal font-plus leading-custom-sm md:leading-custom-sm md:leading-custom-xl`}
        >
            {text}
            {data && <span className="font-plus font-semibold">{data}</span>}
        </h2>
    );
};

export default PrimaryHeading;