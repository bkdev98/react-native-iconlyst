import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRotate3DBroken = ({
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
      d="M8.37 13.964a1.48 1.48 0 1 0 1.047-2.525l1.485-1.837H8.319"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.26 14.398h-.8V9.602h.8a2.398 2.398 0 1 1 0 4.796"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.11 17.948 2.633.526.523-2.619M21.084 6.32l-2.616-.605-.602 2.602"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.77 18.312a8.89 8.89 0 0 1-2.072-9.62M5.478 5.877a8.88 8.88 0 0 1 7.805-2.726M18.438 5.879a8.89 8.89 0 0 1 1.779 9.678M18.353 18.316a8.88 8.88 0 0 1-7.884 2.488"
    />
  </Svg>
);
export default IconlystRotate3DBroken;
