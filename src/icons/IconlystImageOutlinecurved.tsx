import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageOutlinecurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.58 11.809a2.31 2.31 0 0 1-2.306-2.307 2.31 2.31 0 0 1 2.307-2.31 2.31 2.31 0 0 1 2.308 2.31 2.31 2.31 0 0 1-2.308 2.307m0-3.116a.808.808 0 1 0 .004 1.616.808.808 0 0 0-.004-1.616"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M6.069 17.604a.75.75 0 0 1-.671-1.082c.105-.211 1.065-2.054 2.666-2.054.824 0 1.427.448 1.912.81.472.35.78.565 1.184.565.285-.004 1.024-.893 1.42-1.372.848-1.02 1.725-2.076 2.842-2.076 1.914 0 3.104 2.545 3.233 2.835a.75.75 0 0 1-1.37.612c-.285-.635-1.117-1.947-1.863-1.947-.412 0-1.177.92-1.684 1.53l-.003.004c-.817.985-1.59 1.914-2.575 1.914-.92 0-1.563-.478-2.08-.862-.427-.317-.704-.513-1.016-.513-.535 0-1.122.824-1.323 1.222a.75.75 0 0 1-.672.414"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2 12.396c0 7.383 2.617 10 10 10s10-2.617 10-10-2.617-10-10-10-10 2.617-10 10m1.5 0c0-6.514 1.986-8.5 8.5-8.5s8.5 1.986 8.5 8.5-1.986 8.5-8.5 8.5-8.5-1.986-8.5-8.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageOutlinecurved;
