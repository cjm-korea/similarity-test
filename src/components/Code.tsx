import { FC, useEffect, useState } from 'react'
import { type Language } from 'prism-react-renderer'
import { useTheme } from 'next-themes'
interface CodeProps {
    code: string
    show: boolean
    language: Language
    animationDelay?: number
    animated?: boolean
}

const Code: FC<CodeProps> = ({
    code,
    language,
    show,
    animated,
    animationDelay,
}) => {
    const {theme: applicationTheme} = useTheme()
    const [text, setText] = useState(animated ? '' : code);

    useEffect(() => {
        if(show && animated) {
            let i = 0
            setTimeout(() => {
                
            }, animationDelay)
        }
    },[])
    return <div>Code</div>
}

export default Code