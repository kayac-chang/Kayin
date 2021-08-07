import { Icon, BottomNavigation } from "./components";

function TopBar() {
  return (
    <div className="text-white flex justify-between items-center p-4">
      <button className="w-6">
        <Icon.ChevronLeft />
      </button>

      <h1>Title</h1>

      <button className="w-6">
        <Icon.Cog />
      </button>
    </div>
  );
}

function Page() {
  return <div></div>;
}

function App() {
  return (
    <div className="h-screen flex flex-col">
      <header>
        <TopBar />
      </header>

      <main className="flex-1">
        <Page />
      </main>

      <footer>
        <BottomNavigation />
      </footer>
    </div>
  );
}

export default App;
