import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystActivityTwoTonecurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.917 15.854 2.993-3.89 3.414 2.68 2.93-3.78"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.667 3.35a1.921 1.921 0 1 1 .001 3.843 1.921 1.921 0 0 1 0-3.843"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.756 10.269c.133.895.194 1.903.194 3.034 0 6.938-2.312 9.25-9.25 9.25s-9.25-2.312-9.25-9.25c0-6.937 2.312-9.25 9.25-9.25 1.11 0 2.1.059 2.983.187"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystActivityTwoTonecurved;
