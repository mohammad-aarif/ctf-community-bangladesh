import Baffle from "baffle-react";

const TextAnimation = ({text, toggle}:{text :string, toggle: boolean}) => {
    return (
        <div className='text-3xl font-bold text-white'>
            <Baffle
                speed={50}
                characters="!▒▓▋∥∩⋩⎛⎜⎝⎞⎠⎫$%^*"
                exclude={[" ", "!"]}
                obfuscate={toggle}
                revealDuration={1000}
                className="text-red-300"
                revealDelay={0}
            >{text}</Baffle>
        </div>
    );
};

export default TextAnimation;