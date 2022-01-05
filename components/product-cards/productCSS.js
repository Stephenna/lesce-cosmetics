export const smBorder = () => {
    const small = {
        width: 237,
        height: 279,
        border: "1px solid grey",
        position: "absolute",
        bottom: 46,
        left: 40,
        display: "flex", 
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "space-between",
        // alignContent: stretch,
    }

    return small
}

export const medBorder = () => {
    const med = {
        width: 262,
        height: 357,
        border: "1px solid grey",
        position: "absolute",
        bottom: 46,
        left: 40,
        display: "flex", 
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "space-between",
    }

    return med;
}

export const lgBorder = () => {
    const large = {
        width: 272,
        height: 423,
        border: "1px solid grey",
        position: "absolute",
        bottom: 46,
        left: 40,
        display: "flex", 
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "space-between",
    }

    return large;
}

// display: flex;
// flex-direction: row;
// align-items: flex-end;
// justify-content: space-between;
// align-content: stretch;
// flex-wrap: wrap;