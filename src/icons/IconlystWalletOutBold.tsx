import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletOutBold = ({
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
      d="M18.738 11.333c0 .42-.33.75-.74.75h-.01a.749.749 0 1 1 0-1.5c.42 0 .75.34.75.75m-2.62.06c0 .98.8 1.78 1.78 1.78h4.01a.3.3 0 0 0 .3-.3v-2.97a.3.3 0 0 0-.3-.3h-4.01c-.98 0-1.78.8-1.78 1.79"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.618 11.393a3.29 3.29 0 0 1 3.28-3.29h4.007a.29.29 0 0 0 .291-.303c-.184-2.84-2.54-5.097-5.428-5.097h-8.13c-2.99 0-5.43 2.44-5.43 5.44v3.39c0 .288.414.448.659.295.382-.24.835-.379 1.32-.385h.01c1.38 0 2.49 1.12 2.5 2.5v1.132c0 .173.146.308.319.32.575.04 1.144.279 1.592.718.98.97.98 2.56.01 3.54l-.158.158a.3.3 0 0 0 .212.512h7.096c3.022 0 5.286-2.443 5.432-5.35a.29.29 0 0 0-.292-.3h-4.01c-1.81 0-3.28-1.47-3.28-3.28"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m7.314 17.357-1.368 1.375-.003-4.784a.75.75 0 0 0-1.5 0l.003 4.785-1.372-1.377a.749.749 0 1 0-1.062 1.059l2.653 2.664a.74.74 0 0 0 .53.22c.018 0 .033-.008.05-.01a.7.7 0 0 0 .24-.048.8.8 0 0 0 .242-.162l2.65-2.663a.751.751 0 0 0-1.063-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletOutBold;
