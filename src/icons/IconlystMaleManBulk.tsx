import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMaleManBulk = ({
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
      strokeWidth={2}
      d="M17.196 13.344a6.599 6.599 0 1 1-13.197 0 6.599 6.599 0 0 1 13.197 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m18.992 6.483-.004 1.753a1 1 0 0 0 2 .004l.009-4.097a1 1 0 0 0-.601-1.001 1 1 0 0 0-.401-.083l-4.18.008a1 1 0 1 0 .004 2l1.763-.003-2.967 2.967a1 1 0 0 0 1.414 1.414z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMaleManBulk;
