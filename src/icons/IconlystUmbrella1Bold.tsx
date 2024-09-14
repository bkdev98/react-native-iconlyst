import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUmbrella1Bold = ({
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
      d="M15.962 18.106a.75.75 0 0 0-.75.75 1.232 1.232 0 0 1-2.462 0v-4.68c0-.11.09-.2.2-.2h1.828a.2.2 0 0 0 .2-.203c-.083-4.65-1.851-7.477-2.83-8.687a.19.19 0 0 0-.297 0c-.978 1.209-2.748 4.036-2.83 8.687a.2.2 0 0 0 .2.203h1.829c.11 0 .2.09.2.2v4.68a2.735 2.735 0 0 0 2.732 2.73 2.734 2.734 0 0 0 2.73-2.73.75.75 0 0 0-.75-.75M11.013 3.752c.127-.14.02-.37-.167-.346-4.164.524-7.575 3.843-8.32 8.288a1.967 1.967 0 0 0 1.942 2.281h2.85c.11 0 .2-.09.201-.2.089-5.663 2.441-8.87 3.494-10.023M21.473 11.694c-.745-4.444-4.155-7.763-8.32-8.287-.186-.024-.294.206-.167.345 1.053 1.154 3.405 4.36 3.494 10.023.002.11.091.2.201.2h2.851a1.968 1.968 0 0 0 1.941-2.281"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUmbrella1Bold;
