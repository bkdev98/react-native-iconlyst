import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinterestSquareTwoTone = ({
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
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.947C21 18.92 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.973V8.026C3 5.081 4.843 3 7.782 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.434 14.642a4.2 4.2 0 0 1-.357-.846 4.1 4.1 0 0 1-.175-1.187c0-2.563 2.358-4.64 5.266-4.64s4.928 2.132 4.928 4.693c0 2.147-1.345 4.435-3.777 4.563-1.786.095-3.1-1.189-2.796-3.033M8.93 21.002l2.16-9.213"
    />
  </Svg>
);
export default IconlystPinterestSquareTwoTone;
