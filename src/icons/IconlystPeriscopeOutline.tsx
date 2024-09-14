import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPeriscopeOutline = ({
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
      d="M4.094 10.428c0-4.454 3.518-8.178 8.007-8.178 4.301 0 7.806 3.74 7.806 8.178 0 1.213-.399 2.518-.972 3.757-.578 1.249-1.357 2.483-2.173 3.57-.817 1.088-1.686 2.049-2.456 2.746a8 8 0 0 1-1.096.855c-.308.192-.706.394-1.11.394-.409 0-.818-.185-1.156-.383a8 8 0 0 1-1.155-.857c-.801-.699-1.691-1.661-2.522-2.75s-1.616-2.324-2.198-3.573c-.577-1.24-.975-2.545-.975-3.759M12.1 3.75c-3.617 0-6.507 3.008-6.507 6.678 0 .908.305 1.986.835 3.126.526 1.13 1.25 2.273 2.03 3.297.782 1.023 1.604 1.908 2.316 2.529.357.31.671.543.927.693.232.136.355.168.389.175.017-.007.118-.036.324-.164.24-.15.54-.383.885-.695.686-.622 1.492-1.509 2.262-2.534s1.488-2.168 2.011-3.3c.528-1.14.834-2.218.834-3.127 0-3.683-2.904-6.678-6.306-6.678"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.7 7.406q.046.26.047.532a3.03 3.03 0 0 1-3.562 2.984A2.9 2.9 0 1 0 12.7 7.406M11.47 5.851q.26-.03.526-.03A4.398 4.398 0 1 1 7.63 9.692a.75.75 0 0 1 1.186-.517 1.53 1.53 0 0 0 2.137-2.137.75.75 0 0 1 .518-1.188"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPeriscopeOutline;
