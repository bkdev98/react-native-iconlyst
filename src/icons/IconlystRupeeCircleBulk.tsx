import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRupeeCircleBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 2.563c-5.238 0-9.5 4.26-9.5 9.5 0 5.237 4.262 9.5 9.5 9.5s9.5-4.262 9.5-9.5c0-5.24-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.388 11.003a.75.75 0 0 0-.75-.75h-1.254a3 3 0 0 0-.246-.58h1.5a.75.75 0 0 0 0-1.5h-3.937c-.036 0-.07-.01-.106-.01h-.933a.75.75 0 0 0-.75.75l.001.005v.005c0 .414.335.75.75.75H10.7c.428.032.803.251 1.043.58H9.662a.75.75 0 0 0 0 1.5h2.188c-.24.45-.709.76-1.254.76h-.933a.75.75 0 0 0-.53 1.28l3.11 3.11a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.06L11.37 13.91a2.93 2.93 0 0 0 2.066-2.156h1.202a.75.75 0 0 0 .75-.75"
    />
  </Svg>
);
export default IconlystRupeeCircleBulk;
