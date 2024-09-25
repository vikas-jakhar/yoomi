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
            className={`${className} font-normal leading-6 sm:leading-7 text-black opacity-70`}
        >
            {data}
        </p>
    );
};

export default PrimaryParagraph;
