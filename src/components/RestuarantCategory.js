import ItemList from "./ItemList";

const RestuarantCategory = ({data,showItem,setShowIndex})=>{
    
    const handleClick = ()=>{
        setShowIndex();
    };

    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                 {/**Header */}
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data?.title} ({data?.itemCards?.length || 0})</span>
                    <span>🔽</span>
                </div>
                {/**Accordion Body */}
                <div>
                   {showItem && <ItemList items={data?.itemCards}/>}
                </div>
            </div>
        </div>
    );
}

export default RestuarantCategory;