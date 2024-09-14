import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdRefreshBold = ({
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
      d="M17.036 3.125H6.965c-2.67 0-4.463 1.877-4.463 4.67v.08a.3.3 0 0 0 .3.3H21.2a.3.3 0 0 0 .3-.3v-.08c0-2.793-1.794-4.67-4.464-4.67M2.5 14.373c0 2.79 1.8 4.67 4.47 4.67h4.2c.203 0 .347-.197.3-.394a6.267 6.267 0 0 1 6.109-7.676c1.255 0 2.43.367 3.412 1.009.211.138.509-.007.509-.26V9.974a.3.3 0 0 0-.3-.3H2.8a.3.3 0 0 0-.3.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.382 13.003c-.955 0-1.879.346-2.603.974a.751.751 0 0 0 .985 1.132 2.47 2.47 0 0 1 1.618-.606 2.44 2.44 0 0 1 2.438 2.44.75.75 0 0 0 1.5 0 3.943 3.943 0 0 0-3.938-3.94M18.999 18.767a2.45 2.45 0 0 1-1.616.605 2.437 2.437 0 0 1-2.44-2.429.75.75 0 0 0-1.5 0 3.94 3.94 0 0 0 3.94 3.93c.957 0 1.88-.346 2.602-.975a.751.751 0 0 0-.986-1.13"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCarrdRefreshBold;
