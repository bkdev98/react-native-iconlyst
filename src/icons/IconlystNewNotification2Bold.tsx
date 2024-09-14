import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewNotification2Bold = ({
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
      d="M9.554 16.67a2.875 2.875 0 1 1 0-5.75 2.875 2.875 0 0 1 0 5.75m3.541-11.381c0-.906.217-1.76.593-2.521H7.587c-3.118 0-5.213 2.192-5.213 5.455v7.845c0 3.26 2.095 5.453 5.213 5.453h8.324c3.119 0 5.216-2.192 5.216-5.453v-5.55a5.7 5.7 0 0 1-2.31.493 5.73 5.73 0 0 1-5.722-5.722"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.771 8.19a2.86 2.86 0 0 0 2.855-2.855 2.86 2.86 0 0 0-2.855-2.856 2.86 2.86 0 0 0-2.856 2.856 2.86 2.86 0 0 0 2.856 2.856"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNewNotification2Bold;
