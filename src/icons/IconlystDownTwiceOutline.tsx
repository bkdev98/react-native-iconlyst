import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownTwiceOutline = ({
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
      d="M12.458 15.423a.75.75 0 0 0-1.06 0l-3.433 3.433-3.434-3.433a.75.75 0 1 0-1.06 1.06l3.963 3.965a.75.75 0 0 0 1.061 0l3.963-3.965a.75.75 0 0 0 0-1.06M16.416 3.332a.75.75 0 0 0-.75.75v6.408l-2.304-2.304a.75.75 0 1 0-1.06 1.06l3.584 3.586a.75.75 0 0 0 1.06 0l3.584-3.585a.75.75 0 1 0-1.06-1.06l-2.304 2.303V4.082a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.963 3.332a.75.75 0 0 0-.75.75v15.835a.75.75 0 0 0 1.5 0V4.082a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownTwiceOutline;
