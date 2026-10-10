import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../context/ThemeProvider";

const textureLoader = new THREE.TextureLoader();
const imageUrls = [
  "/images/react2.webp",
  "/images/next2.webp",
  "/images/node2.webp",
  "/images/express.webp",
  "/images/mongo.webp",
  "/images/mysql.webp",
  "/images/typescript.webp",
  "/images/javascript.webp",
];
const textures = imageUrls.map((url) => textureLoader.load(url));

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

const spheres = [...Array(30)].map(() => ({
  scale: [0.7, 1, 0.8, 1, 1][Math.floor(Math.random() * 5)],
}));

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive) return;
    delta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current!.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      );

    api.current?.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );
    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);
  const [cameraFov, setCameraFov] = useState(() =>
    typeof window !== "undefined" && window.innerWidth < 768 ? 44 : 32.5
  );
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    let intervalId: number | undefined;
    let timeoutId: number | undefined;

    const handleScroll = () => {
      const techEl = document.querySelector(".techstack");
      if (!techEl) return;
      const rect = techEl.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      setIsActive(inView);
    };

    const onHeaderClick = () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      intervalId = window.setInterval(() => {
        handleScroll();
      }, 50);
      timeoutId = window.setTimeout(() => {
        clearInterval(intervalId);
      }, 1000);
    };

    const handleResize = () => {
      setCameraFov(window.innerWidth < 768 ? 44 : 32.5);
    };

    const headerLinks = document.querySelectorAll(".header a");
    headerLinks.forEach((elem) => {
      elem.addEventListener("click", onHeaderClick);
    });

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll();
    ScrollTrigger.refresh();

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      headerLinks.forEach((elem) => {
        elem.removeEventListener("click", onHeaderClick);
      });
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const materials = useMemo(() => {
    return textures.map(
      (texture) =>
        new THREE.MeshPhysicalMaterial({
          map: texture,
          emissive: "#ffffff",
          emissiveMap: texture,
          emissiveIntensity: isDark ? 0.18 : 0.1,
          metalness: 0.25,
          roughness: 0.6,
          clearcoat: 0.3,
        })
    );
  }, [isDark]);

  return (
    <div className="techstack" id="techstack">
      <h2>My Techstack</h2>

      <Canvas
        shadows
        gl={{ alpha: true, stencil: false, depth: false, antialias: true }}
        camera={{ position: [0, 0, 20], fov: cameraFov, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = isDark ? 1.3 : 1.2)}
        className="tech-canvas"
        style={{ touchAction: "pan-y" }}
      >
        <ambientLight intensity={isDark ? 1.1 : 1.5} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.25}
          color="#FAF8FF"
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <directionalLight
          position={[0, 5, -4]}
          intensity={isDark ? 1.5 : 1.8}
          color={isDark ? "#B69AF5" : "#EDE4FF"}
        />
        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />
          {spheres.map((props, i) => (
            <SphereGeo
              key={i}
              {...props}
              material={materials[Math.floor(Math.random() * materials.length)]}
              isActive={isActive}
            />
          ))}
        </Physics>
        <Environment
          files="/models/char_enviorment.hdr"
          environmentIntensity={isDark ? 0.7 : 0.6}
          environmentRotation={[0, 4, 2]}
        />
        <EffectComposer enableNormalPass={false}>
          <N8AO
            color={isDark ? "#160B24" : "#7A6E94"}
            aoRadius={2}
            intensity={isDark ? 1.0 : 0.7}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default TechStack;

