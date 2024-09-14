import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.8 10.316c0-2.097 1.7-3.796 3.798-3.796h7.829c2.096 0 3.796 1.7 3.796 3.796v5.349c0 2.097-1.7 3.797-3.796 3.797H13.6a.92.92 0 0 0-.65.268l-1.1 1.1c-.739.74-1.937.74-2.677 0l-1.1-1.1a.92.92 0 0 0-.65-.268h-.825A3.797 3.797 0 0 1 2.8 15.665zM6.599 8.02A2.297 2.297 0 0 0 4.3 10.316v5.349a2.297 2.297 0 0 0 2.297 2.297h.826c.64 0 1.256.253 1.71.708l1.1 1.1a.393.393 0 0 0 .556 0l1.1-1.1a2.42 2.42 0 0 1 1.71-.708h.827a2.297 2.297 0 0 0 2.296-2.297v-5.35a2.296 2.296 0 0 0-2.296-2.295z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.679 4.2a2.293 2.293 0 0 0-2.3 2.291v.779a.75.75 0 1 1-1.5 0V6.49c0-2.096 1.7-3.792 3.8-3.792h7.829A3.79 3.79 0 0 1 22.3 6.491v5.35c0 2.102-1.697 3.8-3.793 3.8h-.826a1 1 0 0 0-.12.009l-.017.002a.75.75 0 0 1-.145-1.493l.02-.002c.059-.006.16-.017.262-.017h.826a2.293 2.293 0 0 0 2.293-2.299v-5.35A2.29 2.29 0 0 0 18.508 4.2z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.668 13.136a1.034 1.034 0 1 1 2.069 0 1.034 1.034 0 0 1-2.069 0M6.982 13.136a1.034 1.034 0 1 1 2.07 0 1.034 1.034 0 0 1-2.07 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChatOutline;
