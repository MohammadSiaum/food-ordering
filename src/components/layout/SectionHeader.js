export default function SectionHeader({subHeader, mainHeader}){
    return(
        <div className="text-center space-y-2">
            <h3 className="uppercase text-gray-600 font-semibold">{subHeader}</h3>
            <h2 className="text-5xl font-semibold text-fuchsia-700">{mainHeader}</h2>
        </div>
    )
}