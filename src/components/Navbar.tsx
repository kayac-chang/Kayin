import { Icon } from "./Icon";
import { Button } from "./Button";

export function Navbar() {
  return (
    <>
      <Icon.Bounding className="opacity-0" />

      <nav className="flex flex-col items-center relative">
        <div
          className="w-36 h-8 bg-purple-dark relative"
          style={{ clipPath: `url(#mask)` }}
        />
        <div className="absolute top-4">
          <Button />
        </div>

        <ul className="w-full flex justify-between py-6 px-8 bg-purple-dark rounded-t-3xl text-purple-light">
          <li>
            <a href="">
              <Icon.Folder className="w-7" />
            </a>
          </li>
          <li>
            <a href="">
              <Icon.Award className="w-7" />
            </a>
          </li>

          <li className="w-14"></li>

          <li>
            <a href="">
              <Icon.Heart className="w-7" />
            </a>
          </li>
          <li>
            <a href="">
              <Icon.Book className="w-7" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
