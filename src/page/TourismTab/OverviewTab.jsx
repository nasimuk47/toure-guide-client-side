const OverviewTab = () => {
    return (
        <div className="flex justify-between">
            <div className="">
                <iframe
                    width="700"
                    height="400"
                    src="https://www.youtube.com/embed/XhCkptbe7Z4"
                    title="Overview Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            </div>
            {/* Add more videos or content as needed */}
            <div className="ml-5">
                <p className="text-xl font-bold">
                    VIDEO TOUR <br /> Adventure is out there
                </p>
                <p className="mt-10 font-bold">
                    We offer our clients the most complete and unique open-air
                    adventure thrills they have ever experienced complete with
                    unforgettable moments. Your safety is our most important
                    mission and for this reason.
                </p>
            </div>
        </div>
    );
};

export default OverviewTab;
