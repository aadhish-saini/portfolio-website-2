import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function setCharTimeline(
  character: THREE.Object3D<THREE.Object3DEventMap> | null,
  camera: THREE.PerspectiveCamera
) {
  ScrollTrigger.getById("char-tl1")?.kill();
  ScrollTrigger.getById("char-tl2")?.kill();
  ScrollTrigger.getById("char-tl3")?.kill();
  ScrollTrigger.getById("what-box-tm2")?.kill();

  const tl1 = gsap.timeline({
    scrollTrigger: {
      id: "char-tl1",
      trigger: ".landing-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  const tl2 = gsap.timeline({
    scrollTrigger: {
      id: "char-tl2",
      trigger: ".about-section",
      start: "bottom 95%",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  const tl3 = gsap.timeline({
    scrollTrigger: {
      id: "char-tl3",
      trigger: ".whatIDO",
      start: "bottom 90%",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  let screenLight: THREE.Mesh | null = null;
  let monitor: THREE.Mesh | null = null;
  if (character?.children) {
    for (const object of character.children) {
      if (object.name === "Plane004") {
        for (const child of object.children) {
          const meshChild = child as THREE.Mesh;
          if (meshChild.material) {
            const mat = meshChild.material as THREE.MeshStandardMaterial;
            mat.transparent = true;
            mat.opacity = 0;
            mat.needsUpdate = true;
            if (
              mat.name === "Material.027" ||
              mat.name === "Material.004" ||
              meshChild.name === "Plane017_1" ||
              !monitor
            ) {
              monitor = meshChild;
              if (mat.color) {
                mat.color.set("#FFFFFF");
              }
            }
          }
        }
        if (!monitor && (object as THREE.Mesh).isMesh) {
          monitor = object as THREE.Mesh;
        }
      }
      if (object.name === "screenlight") {
        const meshObj = object as THREE.Mesh;
        if (meshObj.material) {
          const mat = meshObj.material as THREE.MeshStandardMaterial;
          mat.transparent = true;
          mat.opacity = 0;
          mat.needsUpdate = true;
          if (mat.emissive) {
            mat.emissive.set(new THREE.Color("#C8BFFF"));
          }
          gsap.timeline({ repeat: -1, repeatRefresh: true }).to(mat, {
            emissiveIntensity: () => Math.random() * 8,
            duration: () => Math.random() * 0.6,
            delay: () => Math.random() * 0.1,
          });
        }
        screenLight = meshObj;
      }
    }
  }
  const neckBone =
    character?.getObjectByName("spine005") ||
    character?.getObjectByName("spine.005");
  if (window.innerWidth > 1024) {
    if (character) {
      tl1
        .fromTo(character.rotation, { y: 0, x: 0 }, { y: 0.62, x: 0, duration: 1 }, 0)
        .fromTo(camera.position, { z: 24.7, y: 13.1 }, { z: 29.5, y: 13.9, duration: 1 }, 0)
        .fromTo(".character-model", { x: 0, y: 0 }, { x: "-24%", y: 0, duration: 1 }, 0)
        .fromTo(".landing-container", { opacity: 1, y: 0 }, { opacity: 0, y: "40%", duration: 0.8 }, 0)
        .fromTo(".about-me", { y: "-50%" }, { y: "0%", duration: 1 }, 0);

      tl2
        .fromTo(
          camera.position,
          { z: 29.5, y: 13.9 },
          { z: 82, y: 8.8, duration: 6, delay: 2, ease: "power3.inOut" },
          0
        )
        .fromTo(".about-section", { y: "0%", opacity: 1 }, { y: "30%", opacity: 0, delay: 2, duration: 6 }, 0)
        .fromTo(
          ".character-model",
          { pointerEvents: "none", x: "-24%" },
          { pointerEvents: "none", x: "-11%", delay: 2, duration: 5 },
          0
        )
        .fromTo(character.rotation, { y: 0.62, x: 0 }, { y: 0.92, x: 0.12, delay: 3, duration: 3 }, 0);

      if (neckBone) {
        tl2.fromTo(neckBone.rotation, { x: 0 }, { x: 0.6, delay: 2, duration: 3 }, 0);
      }
      if (monitor?.material) {
        tl2.fromTo(monitor.material, { opacity: 0 }, { opacity: 1, duration: 0.8, delay: 3.2 }, 0);
      }
      if (screenLight?.material) {
        tl2.fromTo(screenLight.material, { opacity: 0 }, { opacity: 1, duration: 0.8, delay: 4.5 }, 0);
      }
      tl2
        .fromTo(
          ".what-box-in",
          { display: "none" },
          { display: "flex", duration: 0.1, delay: 6 },
          0
        );
      if (monitor?.position) {
        tl2.fromTo(
          monitor.position,
          { y: -10, z: 2 },
          { y: 0, z: 0, delay: 1.5, duration: 3 },
          0
        );
      }
      tl2.fromTo(
        ".character-rim",
        { opacity: 1, scaleX: 1.4, scaleY: 1.4, y: "0%" },
        { opacity: 0, scale: 0, y: "-70%", duration: 5, delay: 2 },
        0.3
      );

      tl3
        .fromTo(
          ".character-model",
          { y: "0%", x: "-11%" },
          { y: "-100%", x: "-11%", duration: 4, ease: "none", delay: 1 },
          0
        )
        .fromTo(".whatIDO", { y: 0 }, { y: "15%", duration: 2 }, 0)
        .fromTo(character.rotation, { x: 0.12 }, { x: -0.04, duration: 2, delay: 1 }, 0);
    }
  } else {
    gsap.set(
      [
        ".character-model",
        ".landing-container",
        ".about-me",
        ".about-section",
        ".whatIDO",
        ".what-box-in",
        ".character-rim",
      ],
      { clearProps: "all" }
    );
    if (character) {
      character.rotation.set(0, 0, 0);
      character.position.set(0, 0, 0);
    }
    camera.position.set(0, 13.1, 24.7);
    camera.zoom = 1.1;
    camera.updateProjectionMatrix();

    if (character) {
      const tM2 = gsap.timeline({
        scrollTrigger: {
          id: "what-box-tm2",
          trigger: ".what-box-in",
          start: "top 70%",
          end: "bottom top",
        },
      });
      tM2.to(".what-box-in", { display: "flex", duration: 0.1, delay: 0 }, 0);
    }
  }
}

export function setAllTimeline() {
  ScrollTrigger.getById("career-timeline-st")?.kill();

  const careerTimeline = gsap.timeline({
    scrollTrigger: {
      id: "career-timeline-st",
      trigger: ".career-section",
      start: "top 30%",
      end: "100% center",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  careerTimeline
    .fromTo(
      ".career-timeline",
      { maxHeight: "10%" },
      { maxHeight: "100%", duration: 0.5 },
      0
    )

    .fromTo(
      ".career-timeline",
      { opacity: 0 },
      { opacity: 1, duration: 0.1 },
      0
    )
    .fromTo(
      ".career-info-box",
      { opacity: 0 },
      { opacity: 1, stagger: 0.1, duration: 0.5 },
      0
    )
    .fromTo(
      ".career-dot",
      { animationIterationCount: "infinite" },
      {
        animationIterationCount: "1",
        delay: 0.3,
        duration: 0.1,
      },
      0
    );

  if (window.innerWidth > 1024) {
    careerTimeline.fromTo(
      ".career-section",
      { y: 0 },
      { y: "20%", duration: 0.5, delay: 0.2 },
      0
    );
  } else {
    careerTimeline.fromTo(
      ".career-section",
      { y: 0 },
      { y: 0, duration: 0.5, delay: 0.2 },
      0
    );
  }
}
