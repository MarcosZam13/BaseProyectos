import UserLists from "@/app/features/user-lists";

const Home = (): JSX.Element => {
  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-16 text-slate-900">
      <div className="mx-auto w-full max-w-4xl">
        <UserLists />
      </div>
    </main>
  );
};

export default Home;
