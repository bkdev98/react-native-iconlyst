import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUI8Light = ({
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
      strokeWidth={1.5}
      d="M18.158 13.443v1.105c0 1.056-.561 2.029-1.463 2.536l-4.766 2.68a2.75 2.75 0 0 1-2.7 0l-4.766-2.68A2.9 2.9 0 0 1 3 14.548V9.453c0-1.057.56-2.029 1.463-2.536l4.766-2.68a2.75 2.75 0 0 1 2.7 0l.911.513"
    />
    <Circle
      cx={17.846}
      cy={7.576}
      r={3.154}
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
    />
  </Svg>
);
export default IconlystUI8Light;
