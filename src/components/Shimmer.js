const Shimmer = () =>{
    const numOfCards = 15;
    const shimmerCards = Array.from({ length: numOfCards }, (v, i, k) => {
        return <div key={i} className="shimmer-cards"></div>;
    });
    return <div className="shimmer-container">{shimmerCards}</div>;
}

export default Shimmer;