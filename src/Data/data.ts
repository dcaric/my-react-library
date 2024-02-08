import { IColorLegend, IEventsColor } from "./misc";


export const eventsHO: IEventsColor[] = [
    { name: "IRAT 2G TO 3G", color: { r: 248, g: 203, b: 173, a: 1 }, hexValue: "#F8CBAD", defaultDisplay: true },
    { name: "IRAT 3G TO 2G", color: { r: 197, g: 90, b: 17, a: 1 }, hexValue: "#C55A11", defaultDisplay: true },
    { name: "IRAT 3G TO 4G", color: { r: 197, g: 224, b: 180, a: 1 }, hexValue: "#C5E0B4", defaultDisplay: true },
    { name: "IRAT 4G TO 3G", color: { r: 84, g: 130, b: 53, a: 1 }, hexValue: "#548235", defaultDisplay: true },
    { name: "IRAT 4G TO 5G", color: { r: 255, g: 230, b: 153, a: 1 }, hexValue: "#FFE699", defaultDisplay: true },
    { name: "IRAT 5G TO 4G", color: { r: 191, g: 144, b: 0, a: 1 }, hexValue: "#BF9000", defaultDisplay: true },
    { name: "INTER", color: { r: 0, g: 176, b: 240, a: 1 }, hexValue: "#00B0F0", defaultDisplay: true },
    { name: "INTER (CO-SITED)", color: { r: 0, g: 176, b: 240, a: 1 }, hexValue: "#00B0F0", defaultDisplay: true },
    { name: "INTRA", color: { r: 112, g: 48, b: 160, a: 1 }, hexValue: "#7030A0", defaultDisplay: true },
    { name: "INTRA (CO-SITED)", color: { r: 112, g: 48, b: 160, a: 1 }, hexValue: "#7030A0", defaultDisplay: true },
    { name: "UNKNOWN", color: { r: 175, g: 171, b: 171, a: 1 }, hexValue: "#AFABAB", defaultDisplay: false },


    { name: "Inter_eNB_Inter_Freq", color: { r: 0, g: 176, b: 240, a: 1 }, hexValue: "#00B0F0", defaultDisplay: true },
    { name: "Inter eNB_Inter Freq", color: { r: 0, g: 176, b: 240, a: 1 }, hexValue: "#00B0F0", defaultDisplay: true },


    { name: "Inter_eNB_Intra_Freq", color: { r: 112, g: 48, b: 160, a: 1 }, hexValue: "#7030A0", defaultDisplay: true },
    { name: "Inter eNB Intra Freq", color: { r: 112, g: 48, b: 160, a: 1 }, hexValue: "#7030A0", defaultDisplay: true },


    { name: "Intra_eNB_Inter_Freq", color: { r: 0, g: 176, b: 240, a: 1 }, hexValue: "#00B0F0", defaultDisplay: true },
    { name: "Intra eNB Inter Freq", color: { r: 0, g: 176, b: 240, a: 1 }, hexValue: "#00B0F0", defaultDisplay: true },


    { name: "Intra_eNB_Intra_Freq", color: { r: 112, g: 48, b: 160, a: 1 }, hexValue: "#7030A0", defaultDisplay: true },
    { name: "Intra eNB Intra Freq", color: { r: 112, g: 48, b: 160, a: 1 }, hexValue: "#7030A0", defaultDisplay: true },


    { name: "LTE_to_CDMA", color: { r: 255, g: 80, b: 80, a: 1 }, hexValue: "#FF5050", defaultDisplay: true },
    { name: "LTE to CDMA", color: { r: 255, g: 80, b: 80, a: 1 }, hexValue: "#FF5050", defaultDisplay: true },


    { name: "LTE_to_GSM_SRVCC", color: { r: 255, g: 80, b: 80, a: 1 }, hexValue: "#FF5050", defaultDisplay: true },
    { name: "LTE to GSM (SRVCC)", color: { r: 255, g: 80, b: 80, a: 1 }, hexValue: "#FF5050", defaultDisplay: true },


    { name: "LTE_to_WCDMA", color: { r: 84, g: 130, b: 53, a: 1 }, hexValue: "#548235", defaultDisplay: true },
    { name: "LTE to WCDMA", color: { r: 84, g: 130, b: 53, a: 1 }, hexValue: "#548235", defaultDisplay: true },


    { name: "MO_CSFB_to_CDMA", color: { r: 255, g: 80, b: 80, a: 1 }, hexValue: "#FF5050", defaultDisplay: true },
    { name: "MO CSFB to CDMA", color: { r: 255, g: 80, b: 80, a: 1 }, hexValue: "#FF5050", defaultDisplay: true },


    { name: "MO_CSFB_to_GSM", color: { r: 255, g: 80, b: 80, a: 1 }, hexValue: "#FF5050", defaultDisplay: true },
    { name: "MO CSFB to GSM", color: { r: 255, g: 80, b: 80, a: 1 }, hexValue: "#FF5050", defaultDisplay: true },


    { name: "MO_CSFB_to_WCDMA", color: { r: 255, g: 153, b: 0, a: 1 }, hexValue: "#FF9900", defaultDisplay: true },
    { name: "MO CSFB to WCDMA", color: { r: 255, g: 153, b: 0, a: 1 }, hexValue: "#FF9900", defaultDisplay: true },


    { name: "MT_CSFB_to_CDMA", color: { r: 255, g: 80, b: 80, a: 1 }, hexValue: "#FF5050", defaultDisplay: true },
    { name: "MT CSFB to CDMA", color: { r: 255, g: 80, b: 80, a: 1 }, hexValue: "#FF5050", defaultDisplay: true },


    { name: "MT_CSFB_to_GSM", color: { r: 255, g: 80, b: 80, a: 1 }, hexValue: "#FF5050", defaultDisplay: true },
    { name: "MT CSFB to GSM", color: { r: 255, g: 80, b: 80, a: 1 }, hexValue: "#FF5050", defaultDisplay: true },


    { name: "MT_CSFB_to_WCDMA", color: { r: 255, g: 153, b: 0, a: 1 }, hexValue: "#FF9900", defaultDisplay: true },
    { name: "MT CSFB to WCDMA", color: { r: 255, g: 153, b: 0, a: 1 }, hexValue: "#FF9900", defaultDisplay: true },


    {
        name: "EPS_Fallback_for_IMS_Voice",
        color: { r: 255, g: 255, b: 0, a: 1 },
        hexValue: "#FFFF00",
        defaultDisplay: true,
    },
    {
        name: "EPS fallback for IMS voice",
        color: { r: 255, g: 255, b: 0, a: 1 },
        hexValue: "#FFFF00",
        defaultDisplay: true,
    },


    { name: "LTE_to_NR-NSA", color: { r: 255, g: 230, b: 153, a: 1 }, hexValue: "#FFE699", defaultDisplay: true },
    { name: "LTE to LTE (NR NSA)", color: { r: 255, g: 230, b: 153, a: 1 }, hexValue: "#FFE699", defaultDisplay: true },


    { name: "NR-NSA_to_LTE", color: { r: 255, g: 153, b: 0, a: 1 }, hexValue: "#FF9900", defaultDisplay: true },
    { name: "LTE (NR NSA) to LTE", color: { r: 255, g: 153, b: 0, a: 1 }, hexValue: "#FF9900", defaultDisplay: true },


    { name: "NR-NSA_to_NR-NSA", color: { r: 0, g: 255, b: 0, a: 1 }, hexValue: "#00FF00", defaultDisplay: true },
    { name: "LTE (NR NSA) to LTE (NR NSA)", color: { r: 0, g: 255, b: 0, a: 1 }, hexValue: "#00FF00", defaultDisplay: true },


    { name: "NR-SA_Intra_Freq", color: { r: 112, g: 48, b: 160, a: 1 }, hexValue: "#7030A0", defaultDisplay: true },
    { name: "NR SA Intra Freq", color: { r: 112, g: 48, b: 160, a: 1 }, hexValue: "#7030A0", defaultDisplay: true },


    { name: "NR-SA_Inter_Freq", color: { r: 0, g: 176, b: 240, a: 1 }, hexValue: "#00B0F0", defaultDisplay: true },
    { name: "NR SA Inter Freq", color: { r: 0, g: 176, b: 240, a: 1 }, hexValue: "#00B0F0", defaultDisplay: true },


    { name: "NR-SA_to_LTE", color: { r: 255, g: 0, b: 255, a: 1 }, hexValue: "#FF00FF", defaultDisplay: true },
    { name: "NR SA to LTE", color: { r: 255, g: 0, b: 255, a: 1 }, hexValue: "#FF00FF", defaultDisplay: true },


    { name: "LTE_to_NR-SA", color: { r: 255, g: 153, b: 255, a: 1 }, hexValue: "#FF99FF", defaultDisplay: true },
    { name: "LTE to NR SA", color: { r: 255, g: 153, b: 255, a: 1 }, hexValue: "#FF99FF", defaultDisplay: true },


    { name: "RRC_Reestablishment", color: { r: 204, g: 255, b: 204, a: 1 }, hexValue: "#CCFFCC", defaultDisplay: false },
    { name: "RRC Reestablishment", color: { r: 204, g: 255, b: 204, a: 1 }, hexValue: "#CCFFCC", defaultDisplay: false },


    { name: "Cell_Reselection", color: { r: 255, g: 204, b: 204, a: 1 }, hexValue: "#FFCCCC", defaultDisplay: true },
    { name: "Cell Reselection", color: { r: 255, g: 204, b: 204, a: 1 }, hexValue: "#FFCCCC", defaultDisplay: true },


    {
        name: "NR-SA_RRC_Reestablishment",
        color: { r: 204, g: 255, b: 204, a: 1 },
        hexValue: "#CCFFCC",
        defaultDisplay: false,
    },
    {
        name: "NR SA RRC Reestablishment",
        color: { r: 204, g: 255, b: 204, a: 1 },
        hexValue: "#CCFFCC",
        defaultDisplay: false,
    },


    { name: "NR_Cell_Reselection", color: { r: 255, g: 204, b: 204, a: 1 }, hexValue: "#FFCCCC", defaultDisplay: true },
    { name: "NR Cell Reselection", color: { r: 255, g: 204, b: 204, a: 1 }, hexValue: "#FFCCCC", defaultDisplay: true },


    { name: "HO Attempt", color: { r: 255, g: 255, b: 255, a: 1 }, hexValue: "#FFFFFF", defaultDisplay: false },


    { name: "LTE_to_WCDMA_PSHO", color: { r: 253, g: 204, b: 0, a: 1 }, hexValue: "#99CC00", defaultDisplay: true },
    { name: "LTE to WCDMA (PSHO)", color: { r: 253, g: 204, b: 0, a: 1 }, hexValue: "#99CC00", defaultDisplay: true },


    { name: "LTE_to_WCDMA_SRVCC", color: { r: 84, g: 130, b: 53, a: 1 }, hexValue: "#548235", defaultDisplay: true },
    { name: "LTE to WCDMA (SRVCC)", color: { r: 84, g: 130, b: 53, a: 1 }, hexValue: "#548235", defaultDisplay: true },


    { name: "GSM_to_GSM_INTRA_SYSTEM", color: { r: 0, g: 176, b: 240, a: 1 }, hexValue: "#00B0F0", defaultDisplay: true },
    { name: "GSM to GSM (Intra-system)", color: { r: 0, g: 176, b: 240, a: 1 }, hexValue: "#00B0F0", defaultDisplay: true },


    { name: "GSM_Cell_Reselection", color: { r: 204, g: 255, b: 255, a: 1 }, hexValue: "#CCFFFF", defaultDisplay: true },
    { name: "Gsm Cell Reselection", color: { r: 204, g: 255, b: 255, a: 1 }, hexValue: "#CCFFFF", defaultDisplay: true },


    {
        name: "Wcdma_Cell_Reselection",
        color: { r: 204, g: 255, b: 255, a: 1 },
        hexValue: "#CCFFFF",
        defaultDisplay: true,
    },
    {
        name: "Wcdma Cell Reselection",
        color: { r: 204, g: 255, b: 255, a: 1 },
        hexValue: "#CCFFFF",
        defaultDisplay: true,
    },


    {
        name: "Wcdma_Handover_Attempt",
        color: { r: 255, g: 255, b: 255, a: 1 },
        hexValue: "#FFFFFF",
        defaultDisplay: false,
    },
    {
        name: "Wcdma Handover Attempt",
        color: { r: 255, g: 255, b: 255, a: 1 },
        hexValue: "#FFFFFF",
        defaultDisplay: false,
    },


    { name: "Wcdma_Hard_Inter_Freq", color: { r: 112, g: 48, b: 160, a: 1 }, hexValue: "#7030A0", defaultDisplay: true },
    { name: "Wcdma Hard Inter Freq", color: { r: 112, g: 48, b: 160, a: 1 }, hexValue: "#7030A0", defaultDisplay: true },


    { name: "Wcdma_Hard_Intra_Freq", color: { r: 112, g: 48, b: 160, a: 1 }, hexValue: "#7030A0", defaultDisplay: true },
    { name: "Wcdma Hard Intra Freq", color: { r: 112, g: 48, b: 160, a: 1 }, hexValue: "#7030A0", defaultDisplay: true },


    { name: "Wcdma_Soft_Intra_Freq", color: { r: 0, g: 176, b: 240, a: 1 }, hexValue: "#00B0F0", defaultDisplay: true },
    { name: "Wcdma Soft Intra Freq", color: { r: 0, g: 176, b: 240, a: 1 }, hexValue: "#00B0F0", defaultDisplay: true },


    { name: "Wcdma_To_Gsm_Inter_Freq", color: { r: 197, g: 90, b: 17, a: 1 }, hexValue: "#C55A11", defaultDisplay: true },
    { name: "Wcdma to Gsm Inter Freq", color: { r: 197, g: 90, b: 17, a: 1 }, hexValue: "#C55A11", defaultDisplay: true },


    { name: "UNKNOWN", color: { r: 175, g: 171, b: 171, a: 1 }, hexValue: "#AFABAB", defaultDisplay: false },
];


export const colorLegendTypes = (): IColorLegend[] => {
    return [
        { name: "Segment", checked: true, value: "sector" },
        { name: "PSC/PCI", checked: false, value: "pci" },
    ];
};





