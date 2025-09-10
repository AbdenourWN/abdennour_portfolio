"use client";
import * as THREE from "three";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment, useGLTF, ContactShadows } from "@react-three/drei";
import { SpringValue, useSpring } from "@react-spring/core";
import { a as three } from "@react-spring/three";
import { a as web } from "@react-spring/web";
import clsx from "clsx";

type GLTFResult = {
  nodes: {
    Cube008: THREE.Mesh;
    Cube008_1: THREE.Mesh;
    Cube008_2: THREE.Mesh;
    keyboard: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube002_1: THREE.Mesh;
    touchbar: THREE.Mesh;
  };
  materials: {
    aluminium: THREE.MeshStandardMaterial;
    ["matte.001"]: THREE.MeshStandardMaterial;
    ["screen.001"]: THREE.MeshStandardMaterial;
    keys: THREE.MeshStandardMaterial;
    trackpad: THREE.MeshStandardMaterial;
    touchbar: THREE.MeshStandardMaterial;
  };
};

// Interface for the Model component's props
interface ModelProps {
  open: boolean;
  hinge: any;
}

function Model({ open, hinge, ...props }: ModelProps) {
  const group = useRef<THREE.Group>(null!);
  const { nodes, materials } = useGLTF(
    "/mac-draco.glb"
  ) as unknown as GLTFResult;

  // 1. Load the texture
  const texture = useLoader(THREE.TextureLoader, "/Minato.png"); // <-- Path to your image in the public folder

  // This is a crucial step for GLTF models.
  // By default, Three.js flips textures, but GLTF models expect them unflipped.
  texture.flipY = false;

  const [hovered, setHovered] = useState(false);
  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  useFrame((state) => {
    // ... (rest of the useFrame logic is unchanged)
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      open ? Math.cos(t / 10) / 10 + 0.25 : 0,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      open ? Math.sin(t / 10) / 4 : 0,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      open ? Math.sin(t / 10) / 10 : 0,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      open ? (-2 + Math.sin(t)) / 3 : -4.3,
      0.1
    );
  });

  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      dispose={null}
    >
      <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.aluminium}
            geometry={nodes["Cube008"].geometry}
          />
          <mesh
            material={materials["matte.001"]}
            geometry={nodes["Cube008_1"].geometry}
          />

          {/* 2. Replace the old screen mesh with a new one using our texture */}
          <mesh geometry={nodes["Cube008_2"].geometry}>
            <meshBasicMaterial
              map={texture}
              toneMapped={false} // <-- Prevents the texture from being affected by scene lighting and looking washed out
            />
          </mesh>
        </group>
      </three.group>
      {/* ... The rest of the model is unchanged */}
      <mesh
        material={materials.keys}
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes["Cube002"].geometry}
        />
        <mesh
          material={materials.trackpad}
          geometry={nodes["Cube002_1"].geometry}
        />
      </group>
      <mesh
        material={materials.touchbar}
        geometry={nodes.touchbar.geometry}
        position={[0, -0.03, 1.2]}
      />
    </group>
  );
}

export default function FloatingLaptop() {
  // This flag controls open state, alternates between true & false
  const [open, setOpen] = useState(false);
  // We turn this into a spring animation that interpolates between 0 and 1
  const props = useSpring({ open: Number(open) });
  return (
    <web.main
      style={{
        background: props.open.to([0, 1], ["#11071f", "#11071f"]),
      }}
      className={clsx("flex flex-col items-center justify-center transition-all duration-700 w-full min-[590px]:h-[80vh] min-[415px]:h-[60vh] h-[50vh] max-[415px]:mt-10",
        {" min-[590px]:-translate-y-64 min-[415px]:-translate-y-32 -translate-y-10" : !open},
        { "translate-y-0" : open}

      )}
    >
      <web.h1
        style={{
          opacity: props.open.to([0, 1], [1, 0]),
          transform: props.open.to(
            (o) => `translate3d(0%,${o * 50 + 500}px,0)`
          ),
        }}
        className={"mx-auto text-center text-white min-[590px]:text-7xl text-4xl max-[590px]:-translate-y-32 max-[415px]:-translate-y-52 min-[415px]:text-5xl font-bold"}
      >
        click
      </web.h1>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 25 }}>
        <three.pointLight
          position={[10, 10, 10]}
          intensity={1.5}
          color={props.open.to([0, 1], ["#f0f0f0", "#d25578"])}
        />
        <Suspense fallback={null}>
          <group
            rotation={[0, Math.PI, 0]}
            onClick={(e) => (e.stopPropagation(), setOpen(!open))}
          >
            <Model open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} />
          </group>
          <Environment preset="city" />
        </Suspense>
        <ContactShadows
          position={[0, -4.5, 0]}
          opacity={0.4}
          scale={20}
          blur={1.75}
          far={4.5}
        />
      </Canvas>
    </web.main>
  );
}
