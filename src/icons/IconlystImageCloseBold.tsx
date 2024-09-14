import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageCloseBold = ({
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
      d="M19.56 11.348a7.206 7.206 0 0 1-7.206-7.207q0-.253.021-.502a.526.526 0 0 0-.513-.576H7.787c-3.163 0-5.287 2.219-5.287 5.52v6.261a.2.2 0 0 0 .317.162l3.353-2.433a4.914 4.914 0 0 1 6.164.287l2.872 2.577a.2.2 0 0 0 .241.02c.456-.29 1.078-.67 1.799-1.06 1.61-.87 2.94-.404 3.926.257.137.092.328-.003.328-.169v-2.75c0-.331-.316-.57-.642-.51a7 7 0 0 1-1.298.123M17.96 15.716c-.464.251-.892.503-1.255.724a.2.2 0 0 0-.028.318l3.547 3.183a.193.193 0 0 0 .29-.031c.556-.81.893-1.817.957-2.978a.2.2 0 0 0-.093-.179c-1.09-.707-1.989-1.806-3.419-1.037"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.051 13.788A676 676 0 0 1 2.63 16.94a.2.2 0 0 0-.082.176c.24 2.97 2.272 4.938 5.24 4.938h8.435c1.105 0 2.08-.275 2.884-.771a.192.192 0 0 0 .024-.308l-7.792-6.992a3.42 3.42 0 0 0-4.287-.194M16.35 7.515a.75.75 0 0 0 1.06 0L18.726 6.2l1.314 1.314a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.061L19.786 5.14l1.313-1.312a.75.75 0 1 0-1.061-1.061L18.725 4.08l-1.313-1.312a.749.749 0 1 0-1.06 1.06l1.312 1.313-1.314 1.313a.75.75 0 0 0 0 1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageCloseBold;
