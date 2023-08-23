import React, { useState, useEffect, useRef, useMemo } from 'react';
import { createNoise3D } from 'simplex-noise';

const Waves = (props) => {
    const containerRef = useRef(null);
    const width = window.innerWidth;
    const height = window.innerHeight;
    const [canvasDimensions, setCanvasDimensions] = useState({ width: width, height: height });
    const noise3D = createNoise3D();
    const parameters = {
        factor: 0.037,
        variation: 0.001,
        amplitude: height / 2.5,
        lines: 50,
        waveColor: props.color,
        lineStroke: 0.3,
        speed: 0.001
    };
    const setupCanvas = () => {
        const context = containerRef.current.getContext('2d');
        const pixelRatio = Math.min(window.devicePixelRatio, 1.5);
        containerRef.current.width = width * pixelRatio;
        containerRef.current.height = height * pixelRatio;
        context.scale(pixelRatio, pixelRatio);

        setCanvasDimensions({ width, height });
    };
    const setupRandomness = () => {
        const randomness = [];
        for (let i = 0, rand = 0; i < parameters.lines; i++, rand += parameters.factor) {
            randomness[i] = rand;
        }
        return randomness;
    };
    const drawPaths = (context, width, height, randomness) => {
        context.lineWidth = parameters.lineStroke;
        for (let i = 0; i <= parameters.lines; i++) {
            context.beginPath();
            context.moveTo(0, height / 2);
            let randomY = 0;
            for (let x = 0; x <= width; x++) {
                randomY = noise3D(x * parameters.variation + randomness[i], x * parameters.variation, 1);
                context.lineTo(x, height / 2 + (parameters.amplitude + Math.random() * 0.005) * randomY);
            }
            const alpha = Math.min(Math.abs(randomY) + 0.001, 0.3);
            context.strokeStyle = `rgba(${parameters.waveColor.r}, ${parameters.waveColor.g}, ${parameters.waveColor.b}, ${alpha * 2})`;
            context.stroke();
            context.closePath();
            randomness[i] += parameters.speed;
        }
    };

    const resize = () => {
        setupCanvas();
    };

    const render = (context, randomness) => {
        const { width, height } = canvasDimensions;

        context.clearRect(0, 0, width, height);
        drawPaths(context, width, height, randomness);
    };
    useEffect(() => {
        const context = containerRef.current.getContext('2d');
        setupCanvas();
        const randomness = setupRandomness();
        const renderLoop = () => {
            render(context, randomness);
            requestAnimationFrame(renderLoop);
        };
        renderLoop();
        const handleResize = () => {
            debounceResize();
        };
        const debounceResize = debounce(() => {
            resize();
        }, 300);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return <canvas ref={containerRef} id="webgl" />;
};
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}

export default Waves;