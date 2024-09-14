import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterRefreshBold = ({
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
      d="M16.307 7.81a3.72 3.72 0 0 1-3.166 1.785c-2.04 0-3.7-1.659-3.7-3.699a3.704 3.704 0 0 1 5.628-3.16.74.74 0 0 1 .708-.54.75.75 0 0 1 .75.75V4.57a.2.2 0 0 1-.009.05l-.009.04-.002.02a.7.7 0 0 1-.034.157.5.5 0 0 1-.04.075l-.02.031-.002.004a.7.7 0 0 1-.089.132.5.5 0 0 1-.108.084l-.034.03q-.029.028-.065.048l-.012.004-.016.004a.4.4 0 0 1-.076.023l-.042.01-.022.005a.6.6 0 0 1-.15.03l-.01.001-.01.002h-1.633a.75.75 0 0 1-.75-.75c0-.34.231-.616.541-.708a2.2 2.2 0 0 0-.794-.166c-1.213 0-2.2.987-2.2 2.2a2.202 2.202 0 0 0 4.083 1.14.75.75 0 1 1 1.283.774"
    />
    <Path
      fill={props.color}
      d="M18.577 3.663h.499a3.19 3.19 0 0 1 3.186 3.184v1.364a4.28 4.28 0 0 1-1.413 3.173l-4.907 4.855c-.235.212-.36.493-.36.787v1.99c0 .84-.505 1.584-1.286 1.894l-1.882.748a2.041 2.041 0 0 1-2.792-1.893V16.54c0-.273-.111-.54-.305-.735l-4.345-3.867a4.26 4.26 0 0 1-1.273-3.04v-2.05a3.19 3.19 0 0 1 3.186-3.185h.826c.217 0 .364.226.29.43-.199.565-.31 1.171-.31 1.803a5.456 5.456 0 0 0 5.45 5.45 5.48 5.48 0 0 0 4.664-2.63c.47-.778.467-1.708.074-2.457a.36.36 0 0 1 .014-.353c.369-.593.386-1.262.385-1.943a.3.3 0 0 1 .299-.3"
    />
  </Svg>
);
export default IconlystFilterRefreshBold;
