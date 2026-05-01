import Link from 'next/link';

const PageNotFound = () => {
    return (
        <div className="flex items-center justify-center py-10 md:py-25">
            <div className="text-center flex flex-col items-center space-y-5">
                <h1 className="text-6xl font-bold text-orange-500">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800">
                    Page Not Found
                </h2>
                <p>
                    The page you are looking for doesn’t exist.
                </p>

                <Link
                    href="/"
                    className="btn  bg-linear-to-r from-[#c21500] via-[#ffc500] to-[#c21500] font-semibold text-sm leading-12 px-8 rounded-full"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;