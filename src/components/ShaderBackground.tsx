import type { ReactElement } from "react";
import { useEffect, useRef } from "react";

// Continuous, low-key animated sci-fi background (WebGL fragment shader).
// Fixed behind all content, purely decorative, respects reduced-motion.
const ShaderBackground = (): ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const syncSize = (): void => {
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(syncSize)
        : null;
    ro && ro.observe(canvas);
    syncSize();

    const gl = (canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    if (!gl) return;

    const vs = `attribute vec2 a_position;
      void main() { gl_Position = vec4(a_position, 0.0, 1.0); }`;

    const fs = `precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;

      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }
      float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }
      #define OCTAVES 6
      float fbm(vec2 st) {
        float value = 0.0;
        float amplitude = 0.5;
        for (int i = 0; i < OCTAVES; i++) {
          value += amplitude * noise(st);
          st *= 2.0;
          amplitude *= 0.5;
        }
        return value;
      }
      void main() {
        vec2 st = gl_FragCoord.xy / u_resolution.xy;
        st.x *= u_resolution.x / u_resolution.y;

        vec2 q = vec2(0.0);
        q.x = fbm(st + 0.08 * u_time);
        q.y = fbm(st + vec2(1.0));

        vec2 r = vec2(0.0);
        r.x = fbm(st + 1.0 * q + vec2(1.7, 9.2) + 0.12 * u_time);
        r.y = fbm(st + 1.0 * q + vec2(8.3, 2.8) + 0.10 * u_time);

        float f = fbm(st + r);

        vec3 color1 = vec3(0.039, 0.039, 0.047); // void black
        vec3 color2 = vec3(0.0, 0.941, 1.0);      // electric cyan
        vec3 color3 = vec3(0.314, 0.0, 0.471);    // neon purple

        vec3 color = mix(color1, color2, clamp((f * f) * 3.2, 0.0, 1.0) * 0.5);
        color = mix(color, color3, clamp(length(q), 0.0, 1.0) * 0.35);
        color = mix(color, color2, clamp(length(r.x), 0.0, 1.0) * 0.12);

        vec2 grid = fract(st * 40.0);
        float gridLine = smoothstep(0.0, 0.05, grid.x) * smoothstep(1.0, 0.95, grid.x) *
                          smoothstep(0.0, 0.05, grid.y) * smoothstep(1.0, 0.95, grid.y);
        color += (1.0 - gridLine) * 0.04 * color2;

        gl_FragColor = vec4(color * (f * f * f + 0.55 * f * f + 0.45 * f), 1.0);
      }`;

    const compile = (type: number, src: string): WebGLShader | null => {
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram();
    const vertexShader = compile(gl.VERTEX_SHADER, vs);
    const fragmentShader = compile(gl.FRAGMENT_SHADER, fs);
    if (!prog || !vertexShader || !fragmentShader) return;
    gl.attachShader(prog, vertexShader);
    gl.attachShader(prog, fragmentShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const posLoc = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_resolution");

    let rafId: number;
    const render = (t: number): void => {
      if (!ro) syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      ro && ro.disconnect();
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -3,
        opacity: "var(--shader-opacity, 0.55)",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default ShaderBackground;
