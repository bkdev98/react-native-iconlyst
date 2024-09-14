import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleUpCircleOutline = ({
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
      d="M2.25 12c0-5.384 4.365-9.75 9.75-9.75s9.75 4.366 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.384 2.25 12M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.47 12.22a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06L12 13.81l-2.47 2.47a.75.75 0 1 1-1.06-1.06zM11.47 6.97a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06L12 8.56l-2.47 2.47a.75.75 0 1 1-1.06-1.06z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDoubleUpCircleOutline;
