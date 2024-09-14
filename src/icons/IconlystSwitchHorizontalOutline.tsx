import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwitchHorizontalOutline = ({
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
      d="M14.607 12.677a.75.75 0 0 1 1.06 0l2.868 2.867a.748.748 0 0 1 0 1.12l-2.867 2.866a.75.75 0 1 1-1.06-1.06l1.615-1.617H5.97a.75.75 0 0 1 0-1.5h10.254l-1.616-1.616a.75.75 0 0 1 0-1.06M9.395 4.47a.75.75 0 0 1 0 1.06L7.78 7.147h10.254a.75.75 0 1 1 0 1.5H7.78l1.616 1.616a.75.75 0 0 1-1.06 1.06L5.47 8.46a.748.748 0 0 1 .003-1.127L8.335 4.47a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwitchHorizontalOutline;
