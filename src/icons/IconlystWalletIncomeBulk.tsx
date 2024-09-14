import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletIncomeBulk = ({
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
      d="M14.41 11.749a3.29 3.29 0 0 1 3.28-3.29h4.008a.29.29 0 0 0 .292-.302 5.445 5.445 0 0 0-5.43-5.098H8.44c-3 0-5.44 2.44-5.44 5.44v4.507c0 .266.34.42.576.297.34-.176.728-.274 1.134-.274l3.75-.01h.01a3 3 0 0 1 1.38.41c.14.1.27.2.39.32.29.29.51.65.62 1.05q.045.105.06.24c.03.16.05.32.05.49l-.01 3.76c0 .313-.058.611-.163.884-.087.226.064.506.306.506h5.457c3.023 0 5.286-2.444 5.433-5.35a.29.29 0 0 0-.293-.3h-4.01c-1.81 0-3.28-1.47-3.28-3.28"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.54 11.69c0 .42-.34.75-.75.75-.42 0-.75-.33-.75-.75a.749.749 0 1 1 1.5 0m-2.63.06c0 .98.8 1.78 1.78 1.78h4.01a.3.3 0 0 0 .3-.3v-2.97a.3.3 0 0 0-.3-.3h-4.01c-.98 0-1.78.8-1.78 1.79M9.165 15.237a.74.74 0 0 0-.683-.464l-.011-.002h-.002l-3.756.01a.751.751 0 0 0 0 1.5h.003l1.94-.005-3.381 3.385a.749.749 0 1 0 1.06 1.06l3.383-3.384-.004 1.942a.75.75 0 0 0 .748.752h.002a.75.75 0 0 0 .75-.748l.007-3.76a.8.8 0 0 0-.056-.286"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletIncomeBulk;
