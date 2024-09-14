import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRotationTwoTone = ({
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
      d="m11.82 14.814-2.134-2.135a.96.96 0 0 1 0-1.36l2.135-2.135a.96.96 0 0 1 1.359 0l2.136 2.135a.96.96 0 0 1 0 1.36l-2.136 2.134a.96.96 0 0 1-1.36 0"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.5 6.32-2.616-.605-.602 2.6"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.853 5.879a8.89 8.89 0 0 1-7.968 14.926M3.526 17.952l2.633.526.523-2.619"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.185 18.311a8.89 8.89 0 0 1 7.513-15.16"
    />
  </Svg>
);
export default IconlystRotationTwoTone;
