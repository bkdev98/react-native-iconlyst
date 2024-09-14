import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletClockBold = ({
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
      d="M18.675 11.005c0 .42-.33.75-.75.75a.749.749 0 1 1 .75-.75m-2.62.06c0 .99.8 1.78 1.78 1.78h4a.3.3 0 0 0 .3-.3v-2.97a.3.3 0 0 0-.3-.3h-4c-.98 0-1.78.81-1.78 1.79"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.555 11.065a3.29 3.29 0 0 1 3.28-3.29h3.998a.29.29 0 0 0 .292-.302c-.176-2.84-2.541-5.098-5.42-5.098h-8.13c-3 0-5.44 2.44-5.44 5.44v3c0 .238.265.383.475.273a6.44 6.44 0 0 1 3.015-.743c3.6 0 6.52 2.92 6.52 6.52 0 .958-.204 1.859-.578 2.674-.096.208.05.456.28.456h3.858c3.023 0 5.277-2.446 5.423-5.35a.29.29 0 0 0-.293-.3h-4c-1.81 0-3.28-1.47-3.28-3.28"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.63 20.125a3.267 3.267 0 0 1-3.265-3.26 3.27 3.27 0 0 1 3.265-3.27c1.8 0 3.265 1.466 3.265 3.27a3.267 3.267 0 0 1-3.265 3.26m0-8.03a4.773 4.773 0 0 0-4.765 4.77 4.77 4.77 0 0 0 4.765 4.76 4.77 4.77 0 0 0 4.765-4.76 4.773 4.773 0 0 0-4.765-4.77"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m8.263 17.261-.905-.54v-1.206a.75.75 0 0 0-1.5 0v1.63a.75.75 0 0 0 .365.643l1.269.76a.747.747 0 0 0 1.029-.259.75.75 0 0 0-.258-1.028"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletClockBold;
