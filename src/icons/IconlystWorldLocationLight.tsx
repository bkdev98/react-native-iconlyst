import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldLocationLight = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.291 20.364a8.695 8.695 0 0 1-7.985-8.673C3.306 6.898 7.195 3 11.996 3c4.44 0 8.094 3.328 8.619 7.624"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.217 10.805a20 20 0 0 0-.19-2.134C14.575 5.36 13.39 3 11.997 3c-1.384 0-2.578 2.36-3.029 5.67-.136.94-.208 1.954-.208 3.021s.072 2.09.208 3.029c.316 2.297 1.293 4.513 2.324 5.644M3.306 11.701h8.298"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.336 21c-.537 0-3.357-2.284-3.357-4.673a3.358 3.358 0 1 1 6.715 0c0 2.39-2.82 4.672-3.358 4.672"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.311 16.24h.046"
    />
  </Svg>
);
export default IconlystWorldLocationLight;
