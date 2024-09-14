import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPillsBulk = ({
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
      d="M19.947 4.058a5.26 5.26 0 0 0-3.75-1.558 5.26 5.26 0 0 0-3.746 1.557L9.133 7.371a.5.5 0 0 0 0 .708l6.794 6.783a.5.5 0 0 0 .707 0l3.311-3.308a5.28 5.28 0 0 0 1.553-3.752 5.25 5.25 0 0 0-1.552-3.744"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.07 9.137a.5.5 0 0 0-.706 0l-3.314 3.31c-2.065 2.072-2.065 5.436 0 7.496A5.26 5.26 0 0 0 7.797 21.5a5.26 5.26 0 0 0 3.75-1.556l3.317-3.315a.5.5 0 0 0 0-.707z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="m15.988 10.784 1.697-1.61a.751.751 0 0 0-1.033-1.088l-1.697 1.61a.751.751 0 0 0 .516 1.294.75.75 0 0 0 .517-.206"
    />
  </Svg>
);
export default IconlystPillsBulk;
