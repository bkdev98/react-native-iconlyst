import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNintendoTwoTone = ({
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
      d="M7.777 3h2.705v18H7.777C4.83 21 3 18.928 3 15.98V8.03C3 5.082 4.839 3 7.777 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.222 21h-2.704V3h2.704C19.171 3 21 5.072 21 8.02v7.95c0 2.948-1.84 5.03-4.778 5.03"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.346 15.93V16zm.282.015a.284.284 0 1 1-.568 0 .284.284 0 0 1 .568 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.66 8.067v.069zm.282.015a.284.284 0 1 1-.568 0 .284.284 0 0 1 .568 0"
    />
  </Svg>
);
export default IconlystNintendoTwoTone;
