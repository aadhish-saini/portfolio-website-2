import * as THREE from "three";

export const handleMouseMove = (
  event: MouseEvent,
  setMousePosition: (x: number, y: number) => void
) => {
  const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  setMousePosition(mouseX, mouseY);
};

export const handleTouchMove = (
  event: TouchEvent,
  setMousePosition: (x: number, y: number) => void
) => {
  const mouseX = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
  setMousePosition(mouseX, mouseY);
};

export const handleTouchEnd = (
  setMousePosition: (
    x: number,
    y: number,
    interpolationX: number,
    interpolationY: number
  ) => void
) => {
  setTimeout(() => {
    setMousePosition(0, 0, 0.03, 0.03);
    setTimeout(() => {
      setMousePosition(0, 0, 0.1, 0.2);
    }, 1000);
  }, 2000);
};

export const handleHeadRotation = (
  headBone: THREE.Object3D,
  mouseX: number,
  mouseY: number,
  interpolationX: number,
  interpolationY: number,
  lerp: (x: number, y: number, t: number) => number
) => {
  if (!headBone) return;

  const whatIDoEl = document.getElementById("what-i-do");
  const inWhatIDo =
    whatIDoEl && window.scrollY >= whatIDoEl.offsetTop - 350;

  if (inWhatIDo) {
    // When in What I Do (seated typing at desk), head naturally looks at laptop screen
    const targetX = 0.12 - mouseY * 0.08;
    const targetY = mouseX * 0.15;
    headBone.rotation.x = lerp(headBone.rotation.x, targetX, 0.05);
    headBone.rotation.y = lerp(headBone.rotation.y, targetY, 0.05);
    headBone.rotation.z = lerp(headBone.rotation.z, 0, 0.05);
  } else {
    // Hero and About Me: Natural forward-facing eye-level gaze with subtle cursor following
    // Idle/center (mouseX=0, mouseY=0) -> targetX = 0.02 (forward, eye-contact), targetY = 0
    const targetX = 0.02 - mouseY * 0.15;
    const targetY = mouseX * 0.28;

    headBone.rotation.x = lerp(headBone.rotation.x, targetX, interpolationX);
    headBone.rotation.y = lerp(headBone.rotation.y, targetY, interpolationY);
    headBone.rotation.z = lerp(headBone.rotation.z, 0, interpolationX);
  }
};
