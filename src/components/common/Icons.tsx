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
            <svg className='stroke-black transition_slow group-hover:stroke-white' width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.05726 1.18284L1.67187 5.56823L6.05726 9.95361" strokeWidth="1.75416" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        rightArrow: (
            <svg className='stroke-white transition_slow group-hover:stroke-deep-blue' width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.15953 1.18284L5.54492 5.56823L1.15953 9.95361" strokeWidth="1.75416" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        emailIcon: (
            <svg className='fill-white transition_slow group-hover:fill-deep-blue' width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.8887 0.506592H2.88867C1.51367 0.506592 0.401172 1.63159 0.401172 3.00659L0.388672 18.0066C0.388672 19.3816 1.51367 20.5066 2.88867 20.5066H22.8887C24.2637 20.5066 25.3887 19.3816 25.3887 18.0066V3.00659C25.3887 1.63159 24.2637 0.506592 22.8887 0.506592ZM22.8887 5.50659L12.8887 11.7566L2.88867 5.50659V3.00659L12.8887 9.25659L22.8887 3.00659V5.50659Z" />
            </svg>
        ),
        phoneIcon: (
            <svg className='fill-white transition_slow group-hover:fill-deep-blue' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.0687 17.0133C21.4287 17.0133 19.842 16.7466 18.362 16.2666C17.8953 16.1066 17.3753 16.2266 17.0153 16.5866L14.922 19.2133C11.1487 17.4133 7.61534 14.0133 5.73534 10.1066L8.33534 7.89326C8.69534 7.51993 8.802 6.99993 8.65534 6.53326C8.162 5.05326 7.90867 3.46659 7.90867 1.82659C7.90867 1.10659 7.30867 0.506592 6.58867 0.506592H1.97534C1.25534 0.506592 0.388672 0.826592 0.388672 1.82659C0.388672 14.2133 10.6953 24.5066 23.0687 24.5066C24.0153 24.5066 24.3887 23.6666 24.3887 22.9333V18.3333C24.3887 17.6133 23.7887 17.0133 23.0687 17.0133Z" />
            </svg>
        )
    };

    return (
        <span data-aos='zoom-in' className={`flex ${props.className || ''}`}>
            {props.iconName && IconList[props.iconName]}
        </span>
    );
};

export default Icon;