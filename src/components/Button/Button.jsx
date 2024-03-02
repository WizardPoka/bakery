


export default function Button({children, onClick}) {
    // function handleClick() {
    //     console.log("gg")
    // }
    return (
        
        <button class=" glow-on-hover " onClick={onClick}>
            {children}
        </button>
    )
}     
// children передается из <Button> text </Button> в этот файлv