


import "./mylabel.css";
import { AllCaps, CustomFontColor } from '../stories/components/MyLabel.stories';

interface Props {
  /**
   * This is the message it shows in the label
   */
  label: string,
  /**
   * This is the Default size of the label
   */
  size: 'normal'|'h1'|'h2'|'h3',
  /**
   * Colors to choose
   */
  color: 'primary'|'secondary'|'tertiary',
  /**
   * If becomes capitalized
   */
  allCaps: boolean,
  /**
   * Custom color
   */
   fontColor: string,
   /**
   * Background color
   */
    backgroundColor?: string,
  
}

export const MyLabel = ( {
  label = 'no label',
  size = 'normal',
  color = 'primary',
  allCaps = false,
  fontColor,
  backgroundColor = 'transparent'
}: Props ) => {
  return (
    <span className={ `label ${size} text-${color} `}
    style={{ color: fontColor, backgroundColor }}>
        { allCaps ? label.toUpperCase() : label } 
        
    </span>
    
  )
}
