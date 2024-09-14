import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWindRainyTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.258 14.102H9.69a2.934 2.934 0 1 1-2.076 5.01M3.114 9.24h9.033a2.607 2.607 0 1 0-1.843-4.45"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.917 11.938h4.138a2.164 2.164 0 1 1-1.53 3.694M3.344 19.973l.46-1.01M18.575 6.035l.913-2.008M15.03 19.973l.557-1.223M5.196 6.327 6.11 4.32M3.573 14.106q.005 0 .005-.005t-.005-.005q-.003 0-.004.005 0 .005.004.005M20.405 18.475q.004 0 .004-.006 0-.005-.004-.005-.005 0-.005.006 0 .005.005.005M20.655 9.245q.003 0 .004-.005 0-.005-.004-.005-.005 0-.005.005t.005.005"
    />
  </Svg>
);
export default IconlystWindRainyTwoTone;
