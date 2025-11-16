# Plan for Balloon Pop Feature

This document outlines the plan to implement the balloon pop feature on the home page.

## 1. Cursor Change on Hover

*   **Goal:** Change the cursor to a pointer (arrow) when hovering over the balloons.
*   **File to modify:** `src/components/balloonGroup/BalloonGroup.css`
*   **Implementation:**
    *   Identify the CSS class for the balloon elements.
    *   Add the `cursor: pointer;` property to this class.

## 2. Balloon Pop on Click

*   **Goal:** When a balloon is clicked, it should "pop" and disappear.
*   **Files to modify:**
    *   `src/components/balloonGroup/BalloonGroup.tsx` (for logic)
    *   `src/components/balloonGroup/BalloonGroup.css` (for animation)

*   **Implementation in `BalloonGroup.tsx`:**
    *   Add a state to manage the visibility of each balloon. An array of booleans, where each index corresponds to a balloon, would be suitable.
    *   Attach an `onClick` event handler to each balloon element.
    *   When a balloon is clicked, the event handler will update the state to mark that balloon as "popped" (e.g., set the corresponding boolean to `false`).
    *   Conditionally render the balloons based on their state, or apply a "popped" class.

*   **Implementation in `BalloonGroup.css`:**
    *   Create a new CSS class, for example, `.popped`.
    *   This class will define the "pop" animation. A `transform: scale(0);` with a short `transition` would create a shrinking effect.
    *   Alternatively, a keyframe animation could be used for a more elaborate pop effect (e.g., showing a small "burst" image).

## 3. Step-by-step Implementation Guide

1.  **Create the prompt file:** Create a file named `001-balloon-pop-feature.md` in the `/prompts` directory.
2.  **Add CSS for cursor:** In `src/components/balloonGroup/BalloonGroup.css`, add `cursor: pointer;` to the balloon's class.
3.  **Add state for balloons:** In `src/components/balloonGroup/BalloonGroup.tsx`, use the `useState` hook to create an array to track the popped status of each balloon.
4.  **Add click handler:** In `src/components/balloonGroup/BalloonGroup.tsx`, create a function to handle the click event. This function will update the state of the clicked balloon.
5.  **Apply click handler:** Attach the click handler to each balloon element.
6.  **Add CSS for pop animation:** In `src/components/balloonGroup/BalloonGroup.css`, add a new class for the popped state with a scale and opacity transition.
7.  **Apply popped class:** In `src/components/balloonGroup/BalloonGroup.tsx`, conditionally apply the "popped" class to the balloons based on their state.
