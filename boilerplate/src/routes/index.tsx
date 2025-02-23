import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => <HomeComponent />,
});

const HomeComponent = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <p className="font-bold text-2xl text-gray-800">hello</p>
    </div>
  );
};
