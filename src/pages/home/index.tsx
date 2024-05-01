import { Label } from "../../components/ui/label";

const Home = () => {
    return(
        <div className="flex flex-col items-center justify-center p-5 space-y-4 bg-white shadow-md rounded-lg">
        <div className="p-3 w-full border rounded border-gray-300">
            <div className="text-center text-gray-500">Logo</div>
        </div>
        <div className="p-3 w-full border rounded border-gray-300">
            <div className="text-center">FMT ISOLATION</div>
        </div>
        <div className="p-3 w-full border rounded border-gray-300">
            <div className="text-center">New client</div>
        </div>
    </div>
    )
}

export default Home; 