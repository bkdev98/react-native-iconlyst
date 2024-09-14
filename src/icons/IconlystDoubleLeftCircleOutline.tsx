import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleLeftCircleOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 12c0-5.384 4.366-9.75 9.75-9.75s9.75 4.366 9.75 9.75-4.366 9.75-9.75 9.75S2.25 17.384 2.25 12M12 3.75a8.25 8.25 0 1 0 .002 16.502A8.25 8.25 0 0 0 12 3.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.032 8.47a.75.75 0 0 1 0 1.06L8.562 12l2.47 2.47a.75.75 0 0 1-1.06 1.06l-3-2.999a.75.75 0 0 1 0-1.06l3-3.001a.75.75 0 0 1 1.06 0M16.28 8.47a.75.75 0 0 1 0 1.06L13.81 12l2.47 2.47a.75.75 0 0 1-1.06 1.06l-3-2.999a.75.75 0 0 1 0-1.06l3-3.001a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDoubleLeftCircleOutline;
