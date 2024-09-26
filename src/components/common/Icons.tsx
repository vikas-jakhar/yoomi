interface IconProps {
    iconName?: string;
    className?: string;
}

const Icon: React.FC<IconProps> = (props) => {
    const IconList: { [key: string]: JSX.Element } = {
        tickIcon: (
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.12201 14.6687L16.7595 7.03115L15.2428 5.51449L9.12201 11.6353L6.03451 8.54782L4.51784 10.0645L9.12201 14.6687ZM3.05534 19.8687C2.45951 19.8687 1.94926 19.6563 1.52459 19.2317C1.09992 18.807 0.887951 18.2971 0.888674 17.702V2.53532C0.888674 1.93949 1.10101 1.42924 1.52567 1.00457C1.95034 0.579904 2.46023 0.367932 3.05534 0.368654H18.222C18.8178 0.368654 19.3281 0.580988 19.7528 1.00565C20.1774 1.43032 20.3894 1.94021 20.3887 2.53532V17.702C20.3887 18.2978 20.1763 18.8081 19.7517 19.2327C19.327 19.6574 18.8171 19.8694 18.222 19.8687H3.05534Z" fill="#82B2C2" />
            </svg>
        ),
        leftArrow: (
            <svg className='stroke-black group-hover:stroke-white' width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.05726 1.18284L1.67187 5.56823L6.05726 9.95361"strokeWidth="1.75416" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        rightArrow: (
            <svg className='stroke-white group-hover:stroke-deep-blue' width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.15953 1.18284L5.54492 5.56823L1.15953 9.95361" strokeWidth="1.75416" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    };

    return (
        <span className={`flex ${props.className || ''}`}>
            {props.iconName && IconList[props.iconName]}
        </span>
    );
};

export default Icon;