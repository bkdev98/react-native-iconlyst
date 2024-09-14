import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLiqualityBold = ({
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
      d="M20.474 9.525A3.53 3.53 0 0 0 18 8.5c-.912 0-2.003.452-3.244 1.346-1.609 1.182-3.898 1.184-5.515-.002C8.003 8.952 6.912 8.5 6 8.5a3.53 3.53 0 0 0-2.473 1.025A3.47 3.47 0 0 0 2.5 12c0 .936.365 1.815 1.027 2.474A3.53 3.53 0 0 0 6 15.5c.912 0 2.003-.453 3.245-1.347 1.607-1.182 3.9-1.184 5.515.002 1.237.892 2.328 1.345 3.24 1.345.917 0 1.819-.374 2.474-1.026A3.47 3.47 0 0 0 21.5 12c0-.938-.364-1.817-1.026-2.475"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLiqualityBold;
