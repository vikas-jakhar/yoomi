interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    mainClass?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, mainClass = '', className = '', ...props }) => {
    return (
        <div className={`${mainClass} flex`}>
            <button data-aos='zoom-in'
                className={`overflow-hidden group rounded relative z-[1] transition_slow bg-deep-blue px-4 py-2.5 ${className}`}
                {...props}
            >
                <span className="group-hover:drop-shadow-3xl transition_slow font-inter font-semibold text-nowrap text-sm sm:text-base text-white">{text}</span>
                <span className='h-0 w-0 -z-10 opacity-0 group-hover:opacity-100 absolute transition_slow bg-light-green top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:rotate-180 group-hover:h-24 group-hover:w-full'></span>
            </button>
        </div>
    );
};

export default PrimaryButton;