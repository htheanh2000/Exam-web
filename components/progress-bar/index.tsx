type Props = {
    className?: string,
    percents?: number,
    color?: string,
}

const ProgressBar = (props: Props) => {
    const { className = '', percents = 0 , color = '#6C5DD3' } = props
    return (
        <div className={className + ' relative'}>
            <div className="rounded w-full bg-[#E4E4E4] h-2" />
            <div style={{
                width: percents +  '%',
                backgroundColor: color
            }} 
            className={`absolute top-0 rounded h-2`} />
        </div>
    )
}


export default ProgressBar