import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhpBroken = ({
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
      d="m16.562 16.407 1.132-6.855 1.652-.003c.586.003 1.158.057 1.646.45 1.503 1.208.586 3.676-1.136 4.135-.164.044-.425.064-.726.07M10.621 14.447l1.133-6.853M14.531 14.447l.503-3.043a1.267 1.267 0 0 0-1.25-1.474h-2.417M3.75 16.407l1.133-6.854c.496 0 1.457-.004 1.653-.004.584.003 1.156.057 1.645.45 1.502 1.209.585 3.676-1.137 4.135-.193.052-.52.07-.89.072"
    />
  </Svg>
);
export default IconlystPhpBroken;
