import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

document.addEventListener('mousemove', function(e) {
    const spark = document.createElement('div');
    spark.className = 'spark';
    spark.style.left = `${e.clientX}px`;
    spark.style.top = `${e.clientY}px`;
    document.body.appendChild(spark);
    // Remove the spark element after animation completes
    setTimeout(() => {
        document.body.removeChild(spark);
    }, 1000); // Adjust duration as needed
});
