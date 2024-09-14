import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketBulkcurved = ({
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
      d="M13.602 7.005a.75.75 0 0 1-.743-.75V3.007q-.139 0-.271-.003Q12.425 3 12.25 3c-9.545 0-10 1.67-10 6.949a.5.5 0 0 0 .5.5c1.049 0 1.518.779 1.518 1.55 0 .41-.138.805-.381 1.081-.273.312-.655.47-1.137.47a.5.5 0 0 0-.5.5c0 5.28.455 6.95 10 6.95a23 23 0 0 0 .609-.007v-3.449a.75.75 0 0 1 .743-.75v-1.5a.75.75 0 0 1-.743-.75V9.255a.75.75 0 0 1 .743-.75z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M13.603 16.794h.006a.75.75 0 0 1 .75.75v3.418c7.486-.258 7.891-2.056 7.891-6.912a.5.5 0 0 0-.5-.5c-1.049 0-1.518-.778-1.518-1.551 0-.771.47-1.55 1.518-1.55a.5.5 0 0 0 .5-.5c0-4.855-.405-6.653-7.89-6.91v3.216a.75.75 0 0 1-.75.75h-.008v1.5h.007a.75.75 0 0 1 .75.75v5.289a.75.75 0 0 1-.75.75h-.007z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTicketBulkcurved;
