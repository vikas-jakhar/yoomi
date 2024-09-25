interface PrimaryHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    text: string;
    data: string;
    title: string;
    reduceBelow?: number;
    maxFontSize?: number;
    minFontSize?: number;
    className?: string;
}

const PrimaryHeading: React.FC<PrimaryHeadingProps> = ({
    text,
    data,
    title,
    reduceBelow = 1024,
    maxFontSize = 45,
    minFontSize = 25,
    className = '',
    ...props
}) => {
    const sizeReducer = (100 / reduceBelow) * maxFontSize;

    return (
        <h2
            {...props}
            style={{ fontSize: `clamp(${minFontSize}px, ${sizeReducer}vw, ${maxFontSize}px)` }}
            className={`${className} font-black leading-9 md:leading-10 lg:leading-custom-xl`}
        >
            {text}
            <span>{data}</span>
            <span>{title}</span>
        </h2>
    );
};

export default PrimaryHeading;