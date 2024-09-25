interface PrimaryParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
    data: string;
    reduceBelow?: number;
    maxFontSize?: number;
    minFontSize?: number;
    className?: string;
}

const PrimaryParagraph: React.FC<PrimaryParagraphProps> = ({
    data,
    reduceBelow = 768,
    maxFontSize = 16,
    minFontSize = 14,
    className = '',
    ...props
}) => {
    const sizeReducer = (100 / reduceBelow) * maxFontSize;

    return (
        <p
            {...props}
            style={{ fontSize: `clamp(${minFontSize}px, ${sizeReducer}vw, ${maxFontSize}px)` }}
            className={`${className} font-normal font-inter leading-5 sm:leading-6 text-black opacity-70`}
        >
            {data}
        </p>
    );
};

export default PrimaryParagraph;
