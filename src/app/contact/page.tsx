// pages/page.tsx
import Navbar from "@/app/components/Navbar";

const Page: React.FC = () => {
    return (
        <>
            <Navbar />
            <div>
                <h1>Contact Page</h1>
                <p>This is the contact page.</p>
            </div>
        </>
    );
};

export default Page;
