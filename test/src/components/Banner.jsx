"use client"
import React from 'react'
import GradientBlinds from './GradientBlinds'
import BlurText from "./BlurText";
import Aurora from './Aurora';
import TextType from './TextType';
import LiquidEther from './LiquidEther';
import ShinyText from './ShinyText';
import Galaxy from './Galaxy';
import FuzzyText from './FuzzyText';
import Particles from './Particles';
import TextPressure from './TextPressure';
import Iridescence from './Iridescence';
import TextTrail from './TextTrail';
import TextCursor from './TextCursor';
import Lanyard from './Lanyard';

const Banner = () => {

    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };
    return (
        <div>

            <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                <div className='absolute w-full h-full flex justify-center items-center'>
                    <BlurText
                        text="FONDO 1"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className="text-5xl font-bold mb-8 text-white"
                    />
                </div>
                <GradientBlinds
                    gradientColors={['#FF9FFC', '#5227FF']}
                    angle={0}
                    noise={0.3}
                    blindCount={12}
                    blindMinWidth={50}
                    spotlightRadius={0.5}
                    spotlightSoftness={1}
                    spotlightOpacity={1}
                    mouseDampening={0.15}
                    distortAmount={0}
                    shineDirection="left"
                    mixBlendMode="lighten"
                />
            </div>
            <Aurora
                colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                blend={0.5}
                amplitude={1.0}
                speed={0.5}
            />
            <div className=' h-[300px] w-full flex justify-center items-center font-bold text-4xl'>
                <TextType
                    text={["FONDO 2", "AGCH", "IONA"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                />
            </div>

            <div style={{ width: '100%', height: 600, position: 'relative' }}>
                <div className='absolute w-full h-full flex justify-center items-center'>
                    <ShinyText
                        text="FONDO 3"
                        disabled={false}
                        speed={3}
                        className='custom-class'
                    />
                </div>
                <LiquidEther
                    colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                    mouseForce={20}
                    cursorSize={100}
                    isViscous={false}
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo={true}
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                />
            </div>

            <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                <div className='absolute z-0 w-full h-full flex justify-center items-center'>
                    <FuzzyText
                        baseIntensity={0.2}
                        hoverIntensity={0.18}
                        enableHover={.5}
                    >
                        FONDO 4
                    </FuzzyText>
                </div>
                <Galaxy />
            </div>
            <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                <div className='absolute z-0 w-full h-full flex justify-center items-center'>
                    <TextCursor
                        text="FONDO 5"
                        delay={0.01}
                        spacing={80}
                        followMouseDirection={true}
                        randomFloat={true}
                        exitDuration={0.3}
                        removalInterval={20}
                        maxPoints={10}
                    />
                </div>
                <Iridescence
                    color={[1, 1, 1]}
                    mouseReact={false}
                    amplitude={0.1}
                    speed={1.0}
                />
            </div>
            <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                <div className='absolute z-0 w-full h-full flex justify-center items-center'>
                    <div style={{ position: 'relative', height: '100px' }}>
                        <TextPressure
                            text="Hello!"
                            flex={true}
                            alpha={false}
                            stroke={false}
                            width={true}
                            weight={true}
                            italic={true}
                            textColor="#ffffff"
                            strokeColor="#ff0000"
                            minFontSize={100}
                        />
                    </div>
                </div>
                <Particles />
            </div>

            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div>


    )
}

export default Banner