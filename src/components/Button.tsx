import { Icon } from "./Icon";

export function Button() {
  return (
    <button className="w-14 h-14 p-3 rounded-full relative grid place-content-center">
      <span className="absolute w-full h-full bg-gradient-to-tl from-orange-500 to-yellow-300 rounded-full filter blur-sm brightness-110" />
      <span className="absolute w-full h-full bg-gradient-to-tl from-orange-500 to-yellow-300 rounded-full" />
      <Icon.Microphone className="transform w-full h-full" />
    </button>
  );
}
