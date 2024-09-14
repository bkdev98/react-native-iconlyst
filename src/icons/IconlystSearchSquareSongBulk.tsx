import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchSquareSongBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.336 12.255c.974 0 1.882.267 2.669.724.212.123.494-.023.494-.268V7.425c0-3.305-2.123-5.526-5.283-5.526H7.781C4.622 1.9 2.5 4.12 2.5 7.425v7.948c0 3.305 2.123 5.526 5.282 5.526h5.676c.248 0 .394-.288.265-.5a5.3 5.3 0 0 1-.778-2.75 5.4 5.4 0 0 1 5.392-5.394"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.336 19.79a2.145 2.145 0 0 1-2.142-2.143c0-1.18.961-2.142 2.142-2.142s2.143.961 2.143 2.142a2.145 2.145 0 0 1-2.143 2.143m4.084 1.03-1.094-1.093a3.63 3.63 0 0 0 .653-2.08 3.647 3.647 0 0 0-3.643-3.642 3.646 3.646 0 0 0-3.642 3.642 3.647 3.647 0 0 0 3.642 3.643 3.6 3.6 0 0 0 1.898-.534l1.127 1.124a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.06M13.593 8.585a3.4 3.4 0 0 1-1.104-.615l-.535 4.427-.002.008a2.917 2.917 0 0 1-3.235 2.533 2.914 2.914 0 0 1-2.54-3.236A2.913 2.913 0 0 1 9.412 9.16c.5.061.96.257 1.355.545l.473-3.923a.752.752 0 0 1 1.473-.093c.01.041.313 1.128 1.351 1.472a.75.75 0 0 1-.472 1.424M9.064 10.64q.083 0 .17.01c.373.045.707.233.94.529s.335.665.29 1.039a1.41 1.41 0 1 1-1.4-1.578"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchSquareSongBulk;
