import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinOutline = ({
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
      d="M7.87 12.036a.75.75 0 1 1 0-1.5h6.079a2.381 2.381 0 1 0-.04-4.762H6.344a.75.75 0 1 1 0-1.5h7.565a3.88 3.88 0 1 1 .045 7.762z"
    />
    <Path
      fill={props.color}
      d="M14.319 19.735H6.336a.75.75 0 0 1 0-1.5h7.983a3.1 3.1 0 0 0 0-6.2h-.667a.75.75 0 0 1 0-1.5h.664a4.6 4.6 0 1 1 0 9.2z"
    />
    <Path
      fill={props.color}
      d="M7.52 19.734a.75.75 0 0 1-.75-.75V5.02a.75.75 0 0 1 1.5 0v13.959a.75.75 0 0 1-.75.755M9.387 5.773a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 1.5 0v2.023a.75.75 0 0 1-.75.75M13.953 5.773a.75.75 0 0 1-.75-.75V3a.75.75 0 1 1 1.5 0v2.023a.75.75 0 0 1-.75.75M9.387 21.749a.75.75 0 0 1-.75-.75V18.98a.75.75 0 0 1 1.5 0v2.017a.75.75 0 0 1-.75.75M13.953 21.749a.75.75 0 0 1-.75-.75V18.98a.75.75 0 1 1 1.5 0v2.017a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystBitcoinOutline;
