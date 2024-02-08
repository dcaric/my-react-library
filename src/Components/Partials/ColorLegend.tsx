import { Action } from "../../Misc/Action";
import React from "react";
import { useCallback, useEffect, useState } from "react";

//#region BY_RENATO_HACK_SUPPORT



interface ISegmentInfo {
    NA: any;
    val: string;
    count: number;
    color: any;
    percentage: number;
}


// this following chunk ensures the window object can notify when onMapCounter lib is assigned / defined
// react component(s) can subscribe to it and properly init based on that info (without needing hacky delays or wait times)
declare const window: Window & {
    mapCounter: IDataColorLegened;
    _mapCounter: IDataColorLegened;
    onMapCounterAttributesAssigned: Action;
};


window.onMapCounterAttributesAssigned = new Action();


Object.defineProperty(window, "mapCounter", {
    get: () => {
        return window._mapCounter;
    },
    // this catches when onMapCounter assigns itself to window.mapCounter and enables triggering the callback
    set: (value) => {
        window._mapCounter = value;
        if (!window._mapCounter) {
            return;
        }


        window._mapCounter._attrRanges = {};
        const proxy = new Proxy(window._mapCounter._attrRanges, { set: onAttrRangesPropertySet });
        Object.defineProperty(window._mapCounter, "attrRanges", {
            get: () => {
                return proxy;
            },
            // this catches when onMapCounter assigns itself to window.mapCounter and enables triggering the callback
            set: (value) => {
                window._mapCounter._attrRanges = value;
            },
        });


        function onAttrRangesPropertySet(target: any, prop: any, value: any) {
            //@ts-ignore
            const result = Reflect.set(...arguments);
            window.onMapCounterAttributesAssigned.Invoke();
            return result;
        }
    },
});


//#endregion BY_RENATO_HACK_SUPPORT


export const ColorLegend: React.FC<IProps> = (props) => {
    //
    // hooks
    //


    const [_state_dataColorLegend, _setState_setDataColorLegend] = useState<IDataColorLegened>();
    const [_state_doGenerateColors, _setState_doGenerateColors] = useState(false);


    const onMapCounterAttributesAssigned = useCallback(() => {
        if (!window.mapCounter?.attrRanges?.sector) {
            return;
        }


        if (!window.mapCounter?.attrRanges?.pci) {
            return;
        }


        window.onMapCounterAttributesAssigned.RemoveCallback(onMapCounterAttributesAssigned);
        _setState_doGenerateColors(true);
    }, []); // Empty dependency array because there are no external dependencies


    useEffect(() => {
        window.onMapCounterAttributesAssigned.RemoveCallback(onMapCounterAttributesAssigned);


        if (window.mapCounter?.attrRanges?.sector && window.mapCounter?.attrRanges?.pci) {
            _setState_doGenerateColors(true);
        } else {
            window.onMapCounterAttributesAssigned.AddCallback(onMapCounterAttributesAssigned);
        }
    }, [onMapCounterAttributesAssigned]);


    useEffect(() => {
        if (!_state_doGenerateColors) return;
        // this should be removed and only state vars evaluated
        if (!window.mapCounter.attrRanges.sector) return;
        if (!window.mapCounter.attrRanges.pci) return;
        if (!props.segmentNamesWithNodeCount) return;
        if (!props.pciValuesWithNodeCount) return;


        // do this after actually generating them
        _setState_doGenerateColors(false);


        window.mapCounter["segmentNamesWithNodeCount"] = props.segmentNamesWithNodeCount;
        window.mapCounter["pciValuesWithNodeCount"] = props.pciValuesWithNodeCount;
        _setState_setDataColorLegend(window.mapCounter);


        if (props.onSegmentColorsGenerated) {
            let segmentColors: Record<string, { r: number; g: number; b: number; a: number }> = {};
            window.mapCounter
                .getRange("sector")
                .filter((row) => !row.NA)
                .forEach((row) => (segmentColors[row.val] = hexOrRgbaStringToObject(row.color)));
            props.onSegmentColorsGenerated(segmentColors);
        }


        if (props.onPciValuesColorsGenerated) {
            let pciColors: Record<string, { r: number; g: number; b: number; a: number }> = {};
            window.mapCounter
                .getRange("pci")
                .filter((row) => !row.NA)
                .forEach((row) => (pciColors[row.val] = hexOrRgbaStringToObject(row.color)));
            props.onPciValuesColorsGenerated(pciColors);
        }


        function hexOrRgbaStringToObject(colorString: string): { r: number; g: number; b: number; a: number } {
            if (colorString.startsWith("#")) {
                return hexToObject(colorString);
            } else {
                return rgbaStringToObject(colorString);
            }
        }


        function hexToObject(hex: string): { r: number; g: number; b: number; a: number } {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);


            return {
                r: r,
                g: g,
                b: b,
                a: 1,
            };
        }


        function rgbaStringToObject(rgbaString: string): { r: number; g: number; b: number; a: number } {
            // Extracting values using regular expression
            const rgbaValues = rgbaString.match(/(\d+)/g);
            if (!rgbaValues) return { r: 0, g: 0, b: 0, a: 0 };


            // Creating an object
            return {
                r: parseInt(rgbaValues[0]),
                g: parseInt(rgbaValues[1]),
                b: parseInt(rgbaValues[2]),
                a: parseFloat(rgbaValues[3]),
            };
        }
    }, [_state_doGenerateColors, props.segmentNamesWithNodeCount, props.pciValuesWithNodeCount]);


    if (_state_dataColorLegend && Object.keys(_state_dataColorLegend).length !== 0 && _state_dataColorLegend.getRange(props.attribute).length !== 0) {
        //In case of more than two arrtibute, expand with if-else if.
        if (props.attribute === "pci") {
            const result = _state_dataColorLegend.getRange(props.attribute).map((row, index) => {
                // skip N/A rows if there's no count
                if ((row.NA || row.val === "N/A") && row.count === 0) {
                    return;
                }
                let count: number = _state_dataColorLegend.pciValuesWithNodeCount[row.val] ?? 0;


                //Round for percentage purpose
                let perc = Math.round(100 * (count / _state_dataColorLegend.totalCounts)) || 0;
                return (
                    <span className="tooltip">
                        <span className="message top">
                            {row.NA ? "N/A" : row.val}.<br />
                            {count} ({perc}%)
                        </span>
                        <div className="truncate colorlegend-row row" style={{ background: `${row.color}` }}>
                            <span style={{ whiteSpace: "nowrap" }}>{row.NA ? "N/A" : row.val}</span>
                            <span style={{ whiteSpace: "nowrap", color: "silver" }}>
                                {count} ({perc}%)
                            </span>
                        </div>
                    </span>
                );
            });


            // TODO - refactor me !!
            return result as any;
        } else if (props.attribute === "sector") {
            const result = _state_dataColorLegend.getRange(props.attribute).map((row, index) => {
                // skip N/A rows if there's no count
                if ((row.NA || row.val === "N/A") && row.count === 0) {
                    return;
                }


                let count: number = _state_dataColorLegend.segmentNamesWithNodeCount[row.val] ?? _state_dataColorLegend.segmentNamesWithNodeCount["Unknown"] ?? 0;


                //Round for percentage purpose
                let perc = Math.round(100 * (count / _state_dataColorLegend.totalCounts)) || 0;


                return (
                    <div className="colorlegend-row row" style={{ background: `${row.color}` }}>
                        <span style={{ whiteSpace: "nowrap" }}>{row.NA ? "N/A" : row.val}</span>
                        <span style={{ whiteSpace: "nowrap", color: "silver" }}>
                            {count} ({perc}%)
                        </span>
                    </div>
                );
            });


            // TODO - refactor me !!
            return result as any;
        }
    }


    return <div className="loading" style={{ marginLeft: "auto", marginRight: "auto" }}></div>;
};


interface IProps {
    attribute: string | undefined;
    segmentNamesWithNodeCount: Record<string, number> | null;
    onSegmentColorsGenerated: (segmentColors: Record<string, { r: number; g: number; b: number; a: number }>) => any;
    pciValuesWithNodeCount: Record<string, number> | null;
    onPciValuesColorsGenerated: (segmentColors: Record<string, { r: number; g: number; b: number; a: number }>) => any;
}


interface IDataColorLegened {
    _attrRanges: any;
    attrRanges: any;
    attrRangesExist: boolean;
    segmentNamesWithNodeCount: Record<string, number>;
    pciValuesWithNodeCount: Record<string, number>;
    totalCounts: number;
    getRange: (attribute: any) => ISegmentInfo[];
}
