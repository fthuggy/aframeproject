window.addEventListener("DOMContentLoaded", () => {
  const soffa = document.querySelector("#soffa");
  soffa.addEventListener("model-loaded", () => {
    soffa.object3D.traverse((node) => {
      if (node.isMesh && node.material) {
        node.material.color.set("#FF0066");
      }
    });
  });
});

const scene = document.querySelector("a-scene");
