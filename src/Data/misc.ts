export interface IReduxStore {
    [x: string]: any;
    measurementDetails: IReduxStore_MeasurementDetails;
}


export interface IReduxStore_MeasurementDetails {
    Error: {};
    LogAnalyzerHandoverModel: ILogAnalyzerHandoverModel;
    SrsLog: {
        Details: {};
        IsNSASetup: boolean;
        Map: {
            HandoverModel: IHandoverModel;
        };
    };
    L1L3HandoverSummaryTableError: string;
    HandoverSummaryTableError: string;
    loading: boolean;
    success: boolean;
}


export interface IHandoverModel {
    HandoversNew: IHandover[];
}


export interface ILogAnalyzerHandoverModel {
    HandoversNew: IHandover[];
}


export interface IHandover {
    Index: number | null;
    UnixTime: number;
    RSRPDelta: number | null;
    RSRPDeltaString: string;
    Success: boolean | null;
    HandoverResultId: number | null;
    PingPongDetected: boolean | null;
    PingPongID: number | null;
    Status: boolean | null;
    StatusDisplayValue: string;
    SourcePci: string;
    SourceSecondarySegment: string;
    SourceSecondaryPci: string;
    SourceSecondaryFreq: string;
    TargetSecondarySegment: string;
    TargetSecondaryPci: string;
    TargetSecondaryFreq: string;
    TargetPci: string;
    HandoverProcedureId: number | null;
    HandoverProcedureString: string;
    HandoverFailureReasonId: number | null;
    HandoverFailureReasonString: string;
    InterruptionTime: string;
    SourceBsic: string;
    TargetBsic: string;
    Time: {
        TimeZone: {
            Id: number;
            TimeZoneInfoId: string;
            Name: string;
            UtcOffset: string;
            UtcOffsetInSec: number;
            Description: string;
        };
        TimeZoneId: number;
        TimeZoneDescription: string;
        TimeZoneUtcOffset: string;
        TimeZoneUtcOffsetInSec: number;
        UnixTimeUtc: number;
        UnixTime: number;
        IsDst: boolean;
    };
    SourceSiteName: string;
    TargetSiteName: string;
    SourceSegmentName: string;
    SourceLongCellId: number;
    SourceFrequency: string;
    SourceNetworkTypeString: string;
    TargetLongCellId: number;
    TargetFrequency: string;
    TargetSegmentName: string;
    TargetNetworkTypeString: string;
    HandoverTypeId: number;
    HandoverTypeString: string;
    Latitude: number;
    Longitude: number;
    SourceCellId: number | null;
    TargetCellId: number | null;
    SourceNodeId: number | null;
    TargetNodeId: number | null;
    SourceBand: string;
    TargetBand: string;
    SourceSecondaryBand: string;
    TargetSecondaryBand: string;
    SourceBandwidth: string;
    TargetBandwidth: string;
    SourceSecondaryBandwidth: string;
    TargetSecondaryBandwidth: string;
    SourceSignalLevel: string;
    TargetSignalLevel: string;
    SourceSignalQuality: string;
    TargetSignalQuality: string;
    SourceSignalSnr: string;
    TargetSignalSnr: string;
    SourceSecondarySignalLevel: string;
    TargetSecondarySignalLevel: string;
    SourceSecondarySignalQuality: string;
    TargetSecondarySignalQuality: string;
    SourceSecondarySignalSnr: string;
    TargetSecondarySignalSnr: string;
    SourceLac: string;
    TargetLac: string;
}


export interface IHandoverInfo {
    Type: string;
    Count: number;
    Show: boolean;
}


export interface IEventsColor {
    name: string;
    color: { r: number; g: number; b: number; a: number };
    hexValue: string;
    defaultDisplay: boolean;
}


export interface IColorLegend {
    name: string;
    checked: boolean;
    value: string;
}
