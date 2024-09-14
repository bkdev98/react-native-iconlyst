import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRightSquareTwoTonecurved = ({
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
      d="M16.086 12H7.914M12.322 8.248s3.764 2.528 3.764 3.752-3.764 3.748-3.764 3.748"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21.25c6.937 0 9.25-2.313 9.25-9.25S18.937 2.75 12 2.75 2.75 5.063 2.75 12s2.313 9.25 9.25 9.25"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystArrowRightSquareTwoTonecurved;
