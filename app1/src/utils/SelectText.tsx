import { useMemo } from "react"
import listMonths from "./months";

export function SelectText(){
    // essa função carrega os meses util
    const months = useMemo(() => {
        return listMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month,
            }
        });
    },[]);

    return(
        <div>
            <select>
                { months.map((item) => (
                    <option key={item.value} value={item.label}>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    )
}