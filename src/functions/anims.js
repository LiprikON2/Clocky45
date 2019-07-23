// Adds premade animation from Animate.css to selected element
const applyAnimation = (target, animName, duration = 1000) => {
    target = document.querySelector(`${target}`)
    // anti click spam... or you can use "throttle(func, 1000)""
    target.disabled = true
    target.style.cursor = "unset"

    target.classList.add(`anim-${animName}`)
    setTimeout(() => {
        target.classList.remove(`anim-${animName}`)
        target.disabled = false
        target.style.cursor = "pointer"
    }, duration)
}

// Adds popup transition to selected element
const applyTransition = (target, transitionVal = "opacity 0.5s", durationIn = 1000, durationOut = 1800) => {
    target = document.querySelector(`${target}`)
    // anti click spam... or you can use "throttle(func, 1000)""
    target.disabled = true
    
    target.style.transition = transitionVal
    target.style.visibility = "unset"
    target.style.opacity = "1"
    setTimeout(function() {
        target.style.opacity = "0"
    }, durationIn)
    setTimeout(function() {
        target.style.visibility = "hidden"
        target.disabled = false
    }, durationOut)
    
}

export default {applyAnimation, applyTransition}