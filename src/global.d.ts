export {};

declare module "*.glb";
declare module "*.png";
declare module "*.webp";

declare module "meshline" {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

declare module "react/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}
