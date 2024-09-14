import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperNegativeBulksharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.54 8.341v-4.66l4.47 4.66zm.49-6.091H4.08v19.5h16.34V7.87z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path fill={props.color} d="M14.938 15.176h-6.44v-1.5h6.44z" />
  </Svg>
);
export default IconlystPaperNegativeBulksharp;
