import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInfoDashBold = ({
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
      d="M13.984 20H10.02a1 1 0 1 0 0 2h3.963a1 1 0 1 0 0-2M13.984 2H10.02a1 1 0 1 0 0 2h3.963a1 1 0 1 0 0-2M3 14.98a1 1 0 0 0 1-1V10.02a1 1 0 1 0-2 0v3.962a1 1 0 0 0 1 1M6.959 2.027c-2.653.31-4.54 2.198-4.921 4.93a1 1 0 0 0 1.98.277c.258-1.842 1.415-3.016 3.173-3.22a1 1 0 0 0 .877-1.11.987.987 0 0 0-1.11-.877M7.191 19.987c-1.76-.206-2.916-1.377-3.173-3.212a1 1 0 1 0-1.98.277c.381 2.725 2.266 4.611 4.921 4.921a1 1 0 0 0 .232-1.986M21 9.019a1 1 0 0 0-1 1v3.962a1 1 0 1 0 2 0v-3.962a1 1 0 0 0-1-1M21.067 15.924a.996.996 0 0 0-1.128.853c-.256 1.835-1.408 3.005-3.161 3.21a1 1 0 0 0 .232 1.987c2.649-.31 4.53-2.196 4.91-4.922a1 1 0 0 0-.853-1.128M16.778 4.014c1.752.204 2.904 1.378 3.16 3.22a1 1 0 0 0 1.129.852 1 1 0 0 0 .853-1.128c-.381-2.732-2.263-4.622-4.91-4.93a.99.99 0 0 0-1.11.877 1 1 0 0 0 .878 1.109M11 15.701a1 1 0 1 0 2 0v-4.309a1 1 0 1 0-2 0zM12 9.323c.553 0 1-.47 1-1.023a1 1 0 1 0-2 0v.047c0 .553.447.976 1 .976"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystInfoDashBold;
