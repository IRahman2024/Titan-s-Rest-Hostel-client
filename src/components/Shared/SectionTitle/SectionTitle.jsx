const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center my-16 w-1/2">
            <h3 className="text-6xl border-y-4 py-4 mt-2 uppercase font-black">{heading}</h3>
            <p className="text-cyan-600 italic">-------- {subHeading} --------</p>
        </div>
    );
};

export default SectionTitle;