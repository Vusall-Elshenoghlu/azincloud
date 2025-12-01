export interface IFAQItem {
    question: string;
    answer: string;
}

export type IFAQData = {
    [topic: string]: FAQItem[];
};
