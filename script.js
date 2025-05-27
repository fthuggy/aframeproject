window.addEventListener("DOMContentLoaded", () => {
  const soffa = document.querySelector("#soffa");
  soffa.addEventListener("model-loaded", () => {
    soffa.object3D.traverse((node) => {
      if (node.isMesh && node.material) {
        node.material.color.set("#D0C0B1");
      }
    });
  });
});
