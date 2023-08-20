import { Outlet } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { Header } from "../components/Header";

export const MainLayout = () => {
  const { data: me, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(me);

  return (
    <div className="h-screen flex flex-col bg-gray-100 text-gray-700 font-mono text-xl font-bold text-center">
      <Header />
      <Outlet />
    </div>
  );
};
