import * as React from 'react';
import Svg, { Path, Rect, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBotFlowLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.505 11.749a.756.756 0 0 0-1.069 0L9.3 13.886a.756.756 0 0 0 0 1.07l2.138 2.137a.756.756 0 0 0 1.068 0l2.138-2.138a.756.756 0 0 0 0-1.069zM11.971 8.066v3.461"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.923 14.443h3.487c.56 0 1.013.454 1.013 1.014v2.157M11.97 5.744v-.04zm-.163-.01a.164.164 0 1 1 .329 0 .164.164 0 0 1-.329 0M14.43 5.744v-.04zm-.162-.01a.165.165 0 1 1 .329.001.165.165 0 0 1-.33 0M9.507 5.744v-.04zm-.164-.01a.165.165 0 1 1 .33.001.165.165 0 0 1-.33 0"
    />
    <Rect
      width={11.918}
      height={4.834}
      x={6.008}
      y={3.232}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={2.417}
    />
    <Circle
      cx={19.423}
      cy={19.19}
      r={1.577}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="rotate(90 19.423 19.19)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.077 14.443H5.59c-.56 0-1.013.454-1.013 1.014v2.157"
    />
    <Circle
      cx={1.577}
      cy={1.577}
      r={1.577}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(0 1 1 0 3 17.613)"
    />
  </Svg>
);
export default IconlystBotFlowLight;
