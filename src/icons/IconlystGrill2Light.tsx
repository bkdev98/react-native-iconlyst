import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGrill2Light = ({
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
      d="M4.636 8.545a7.364 7.364 0 0 0 14.729 0z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.553 15.493 7.723 21M14.499 15.493 16.329 21M8.47 19.177h7.135M8.661 4.573a1.113 1.113 0 0 0 0 1.574M12.161 3a1.11 1.11 0 0 1 0 1.572 1.113 1.113 0 0 0 0 1.573M15.661 4.573a1.113 1.113 0 0 0 0 1.574"
    />
  </Svg>
);
export default IconlystGrill2Light;
