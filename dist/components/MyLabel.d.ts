/// <reference types="react" />
import "./mylabel.css";
export interface Props {
    /**
     * This is the message it shows in the label
     */
    label: string;
    /**
     * This is the Default size of the label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Colors to choose
     */
    color: 'primary' | 'secondary' | 'tertiary';
    /**
     * If becomes capitalized
     */
    allCaps: boolean;
    /**
     * Custom color
     */
    fontColor: string;
    /**
    * Background color
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor }: Props) => JSX.Element;
