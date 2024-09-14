import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVechainBroken = ({
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
      d="M14.934 20.91c-.04-.103-6.648-17.82-6.648-17.82s-4.71.01-4.786.015c.01.03 1.193 3.198 2.56 6.855M17.217 14.7l-2.282 6.21M21.5 3.09c-.802 2.155-1.978 5.345-3.115 8.434"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.935 20.91c-1.389-.007-4.782 0-4.782 0l-1.967-5.264"
    />
  </Svg>
);
export default IconlystVechainBroken;
