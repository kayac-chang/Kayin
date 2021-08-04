import { Icon } from "./Icon";

export function Button() {
  return (
    <button className="w-20 h-20 p-5 rounded-full relative grid place-content-center">
      <span className="absolute w-full h-full bg-gradient-to-tl from-orange-500 to-yellow-300 rounded-full" />
      <span className="absolute w-full h-full bg-gradient-to-tl from-orange-500 to-yellow-300 rounded-full filter blur-sm brightness-110" />
      <Icon.Microphone className="transform w-full h-full" />
    </button>
  );
}
