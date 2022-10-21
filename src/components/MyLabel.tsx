


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
  
}

export const MyLabel = ( {
  label = 'no label',
  size = 'normal',
  color = 'primary',
  allCaps = false,
  fontColor,
}: Props ) => {
  return (
    <span className={ `label ${size} text-${color} `}
    style={{ color: fontColor }}>
        { allCaps ? label.toUpperCase() : label } 
        
    </span>
    
  )
}
