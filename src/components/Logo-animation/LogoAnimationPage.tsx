import { useEffect, useRef, useState } from 'react'
import './logo-animation.scss'

export const LogoAnimationPage = ({bgColor}: {bgColor: string}) => {

    const [isLoading, setIsLoading] = useState(false);
    // const navigate = useNavigate();
    const [isEndAnimationStart, setIsEndAnimationStart] = useState(false);
    const [isAnimationEnd, setIsAnimationEnd] = useState(false);
    const isFirstRenderRef = useRef(true);
    const LogoName = 'AMICHT'.slice(1,6);

    useEffect(() => { 
        // Prevent request on 2nd render
        if(isFirstRenderRef.current){ fetchDataAfterFirstAnimation(); } 
        
        isFirstRenderRef.current = false; 
        
    });

    const fetchUserData = async () => {

        setIsLoading(true);
        
        // For mock - set 2 seconds loading
        const timeToFetchDataInMiliSec = 1500;
        const animationDelay = 500;
        const totalAnimationTimeInCesconds = 6000;

        startFinalAnimation(timeToFetchDataInMiliSec);

        stopLoadindOnAnimationStart(timeToFetchDataInMiliSec + animationDelay); 

        removeFromScreenAfterAnimationEnd(totalAnimationTimeInCesconds);

    }

    const fetchDataAfterFirstAnimation = () => {
        const startAnimationTimeInMiliseconds = 2000;
        // start fetching after 2 seconds (openning animation)
        setTimeout(() => { fetchUserData() }, startAnimationTimeInMiliseconds);
    }

    const startFinalAnimation = (time: number) => setTimeout(() => { setIsEndAnimationStart(true); }, time);
    
    const stopLoadindOnAnimationStart = (time: number) => setTimeout(() => { setIsLoading(false); }, time);
    
    const removeFromScreenAfterAnimationEnd = (time: number) => setTimeout(() => { setIsAnimationEnd(true) }, time);

    return (
        <div style={{backgroundColor: bgColor}} className={`logo-animation-container ${isAnimationEnd? 'd-none': ''}`}>

            <div className='logo-text-wrapper'>
                <div className={`first-letter ${isEndAnimationStart? 'first-letter-animation': ''}`}>
                    <div className='letter-left-column'></div>
                    <div className='letter-right'></div>
                    <div className='letter-center'></div>
                </div>
                <div className='full-name'>{LogoName}</div>
            </div>

            <div className='spinner-wrapper'>
                {
                    isLoading &&
                    <div className={`spinner visible`}></div>
                }
            </div>
            
        </div>
    )
}
