export interface Notification {
    id: number;
    title: string;
    body: string;
    sound: string;
    vibrate: boolean;
    priority: number;
    data: any;
    timestamp: number;
    delay: number;
    repeat: number;
    repeatInterval: number;
    repeatCount: number;
    action: string;
    extras: any;
    tag: string;
    visibility: number;
    sticky: boolean;
    ongoing: boolean;
    autoCancel: boolean;
    tickerText: string;
    ticker: boolean;
   
    groupKey: string;
   

}