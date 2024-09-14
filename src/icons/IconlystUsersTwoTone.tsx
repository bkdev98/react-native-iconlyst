import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUsersTwoTone = ({
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
      d="M19.275 14.473c2.435.5 3.325 2.118 3.325 3.47M18.734 6.207a2.749 2.749 0 0 1 .117 5.192"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.191 20c0-2.11 1.665-4.734 6.459-4.734s6.458 2.605 6.458 4.715"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.777 8.125a4.125 4.125 0 1 1-8.25 0 4.125 4.125 0 0 1 8.25 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.025 14.473c-2.434.5-3.324 2.118-3.324 3.47M6.566 6.207a2.749 2.749 0 0 0-.117 5.192"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUsersTwoTone;
