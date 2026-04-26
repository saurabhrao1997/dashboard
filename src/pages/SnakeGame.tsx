
import { useEffect, useRef, useState } from "react";

type Cell = { x: number; y: number };
type Direction = { x: number; y: number };

const GRID_SIZE = 10;
const TILE_COUNT = 50;

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [snake, setSnake] = useState<Cell[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Cell>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<Direction>({ x: 0, y: 0 });
  const [running, setRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  // 🎮 Prevent reverse direction
  const changeDirection = (newDir: Direction) => {
    if (
      (direction.x === -newDir.x && direction.x !== 0) ||
      (direction.y === -newDir.y && direction.y !== 0)
    ) {
      return;
    }
    setDirection(newDir);
  };

  // ⌨️ Keyboard Controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") changeDirection({ x: 0, y: -0.5 });
      if (e.key === "ArrowDown") changeDirection({ x: 0, y: 0.5 });
      if (e.key === "ArrowLeft") changeDirection({ x: -0.5, y: 0 });
      if (e.key === "ArrowRight") changeDirection({ x: 0.5, y: 0 });
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [direction]);

  // 🔁 Game Loop
  useEffect(() => {
    if (!running || gameOver) return;

    const interval = setInterval(() => {
      setSnake((prev) => {
        const newHead: Cell = {
          x: prev[0].x + direction.x,
          y: prev[0].y + direction.y,
        };

        // 🔁 Wrap around logic
if (newHead.x < 0) newHead.x = TILE_COUNT - 1;
if (newHead.x >= TILE_COUNT) newHead.x = 0;
if (newHead.y < 0) newHead.y = TILE_COUNT - 1;
if (newHead.y >= TILE_COUNT) newHead.y = 0;

        // Wall collision
        // if (
        //   newHead.x < 0 ||
        //   newHead.y < 0 ||
        //   newHead.x >= TILE_COUNT ||
        //   newHead.y >= TILE_COUNT
        // ) {
        // //   setGameOver(true);
        //   setRunning(false);
        //   return prev;
        // }

        // // Self collision
        // if (prev.some((c) => c.x === newHead.x && c.y === newHead.y)) {
        // //   setGameOver(true);
        //   setRunning(false);
        //   return prev;
        // }

        let newSnake = [newHead, ...prev];

        // Eat food
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore((s) => s + 1);
          setFood({
            x: Math.floor(Math.random() * TILE_COUNT),
            y: Math.floor(Math.random() * TILE_COUNT),
          });
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [direction, food, running, gameOver]);

  // 🎨 Draw
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Background
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Snake
    ctx.fillStyle = "#22c55e";
    snake.forEach((s) => {
      ctx.fillRect(s.x * GRID_SIZE, s.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
    });

    // Food
    ctx.fillStyle = "#ef4444";
    ctx.fillRect(food.x * GRID_SIZE, food.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
  }, [snake, food]);

  // 🔁 Restart
  const restart = () => {
    setSnake([{ x: 10, y: 10 }]);
    setDirection({ x: 0, y: 0 });
    setFood({ x: 5, y: 5 });
    setGameOver(false);
    setScore(0);
    setRunning(false);
  };

  return (
    <div className="bg-white dark:bg-[#1e1e2f] p-6 rounded-xl shadow w-fit mx-auto text-center">
      
   <div className="flex gap-2">
       <canvas
        ref={canvasRef}
        width={GRID_SIZE * TILE_COUNT}
        height={GRID_SIZE * TILE_COUNT}
        className="border border-gray-300 dark:border-gray-600 mx-auto"
      />
        <div>
               <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        Snake Game 🐍
      </h2> 

      <p className="text-gray-500 dark:text-gray-300 mb-2">
        Score: {score}
      </p>

      {/* 🎮 Buttons */}
      <div className="flex justify-center gap-2 mb-4">
        <button
        onClick={() => {
    setRunning(true);
    if (direction.x === 0 && direction.y === 0) {
      setDirection({ x: 0.3, y: 0 }); // move right by default
    }
  }}

          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          Start
        </button>
        <button
          onClick={() => setRunning(false)}
          className="px-3 py-1 bg-yellow-500 text-white rounded"
        >
          Pause
        </button>
        <button
          onClick={restart}
          className="px-3 py-1 bg-pink-500 text-white rounded"
        >
          Restart
        </button>
      </div>

      {/* 🕹️ Direction Controls */}
      <div className="mb-4">
        <button
          onClick={() => changeDirection({ x: 0, y: -0.2 })}
          className="px-3 py-1 bg-gray-300 dark:bg-gray-600 rounded"
        >
          ↑
        </button>
        <div className="flex justify-center gap-2 mt-2">
          <button
            onClick={() => changeDirection({ x: -0.2, y: 0 })}
            className="px-3 py-1 bg-gray-300 dark:bg-gray-600 rounded"
          >
            ←
          </button>
          <button
            onClick={() => changeDirection({ x: 0.2, y: 0 })}
            className="px-3 py-1 bg-gray-300 dark:bg-gray-600 rounded"
          >
            →
          </button>
        </div>
        <button
          onClick={() => changeDirection({ x: 0, y: 0.2 })}
          className="px-3 py-1 bg-gray-300 dark:bg-gray-600 rounded mt-2"
        >
          ↓
        </button>
      </div>

        </div>

   </div>

   

      {gameOver && (
        <p className="text-red-500 mt-3 font-semibold">Game Over</p>
      )}
    </div>
  );
}