import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAndroidCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.604 14.092c0-2.974 2.43-5.405 5.405-5.405s5.405 2.431 5.405 5.405v.904c0 .765-.62 1.385-1.385 1.385H7.988c-.765 0-1.384-.62-1.384-1.385zm5.405-3.905a3.92 3.92 0 0 0-3.905 3.905v.788h7.81v-.788a3.92 3.92 0 0 0-3.905-3.905"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.297 12.39a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75m3.405 0a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75M7.88 7.745a.75.75 0 0 1 1.039.213l1.182 1.791a.75.75 0 0 1-1.252.826l-1.182-1.79a.75.75 0 0 1 .213-1.04m8.27.008a.75.75 0 0 1 .193 1.043l-1.231 1.791a.75.75 0 1 1-1.236-.85l1.23-1.79a.75.75 0 0 1 1.043-.194"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAndroidCircleOutline;
