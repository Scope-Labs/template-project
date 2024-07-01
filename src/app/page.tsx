// pages/index.tsx
import Navbar from "@/app/components/Navbar";

const Home: React.FC = () => {
    return (
        <div className='flex flex-col flex-1'>
            <Navbar/>
            <div className='flex flex-col flex-1'>
                <h1>Home Page</h1>
                <p>Welcome to the home page.</p>
            </div>
        </div>
    );
};

export default Home;
