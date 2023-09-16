    const FormatCodeBlocks = (message: string) => {
        const parts = message.split("```");///split on code blocks
        return parts.map((part, index) => {
            if (index % 2 === 0) { //odd indexes are within the ```
                return part; //segments split by by the delimiter
            } else {
                return (
                    <pre key={index} className={colorScheme === "dark" ?
                        "text-white bg-slate-700" : "text-black bg-slate-200"
                    }>
                        <code >{part}</code>
                    </pre>
                );
            }
        });
    };
