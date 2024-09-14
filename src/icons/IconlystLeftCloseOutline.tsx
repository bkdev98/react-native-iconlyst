import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftCloseOutline = ({
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
      d="M6.53 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06L4.06 12l2.47-2.47a.75.75 0 0 0 0-1.06M21.75 5a.75.75 0 0 0-.75-.75H5a.75.75 0 1 0 0 1.5h16a.75.75 0 0 0 .75-.75M21.75 19a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.75 12a.75.75 0 0 0-.75-.75H3a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftCloseOutline;
