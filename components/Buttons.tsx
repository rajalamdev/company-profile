"use client"
interface Props {
    text: string;
    type?: "primary" | "secondary";
    className?: string;
    onClick?: () => void;
    isLoading?: boolean;
}

export default function Button(props: Props){
    return <button 
        className={`${props.type === "primary" ? "bg-foreground text-background" : "bg-transparet border-2 border-foreground text-foreground"} 
        text-sm font-medium rounded-full py-3 px-8 ${props.className}`}
        onClick={(e) => {
            e.preventDefault();
            props.onClick && props.onClick();
        }}
    >
        {props.isLoading ? "Loading..." : props.text}
    
    </button>
}