interface ISelectProps{
    options: {
        value: string | number
        label: string | number
    }[],
}
export function SelectComponent( {options}: ISelectProps ){

    return(
        <select>
            { options.map(item => (
                <option key={item.value} value={item.value}>
                    {item.label}
                </option>
            ))}
        </select>
    )
}