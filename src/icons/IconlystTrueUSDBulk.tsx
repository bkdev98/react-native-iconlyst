import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrueUSDBulk = ({
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
      d="M12.56 2.104c-5.239 0-9.5 4.26-9.5 9.5 0 5.238 4.261 9.5 9.5 9.5s9.5-4.262 9.5-9.5c0-5.24-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M17.351 10.326a.266.266 0 0 0 .266-.266V7.18a.266.266 0 0 0-.266-.266h-3.076a3.13 3.13 0 0 0-3.124 3.125v5.99c0 .146.12.265.266.265h2.807a.266.266 0 0 0 .266-.266v-5.702zM7.768 10.29h.2c1.74 0 3.16-1.36 3.236-3.099a.267.267 0 0 0-.266-.277h-3.17a.266.266 0 0 0-.266.266v2.843c0 .147.12.266.266.266"
    />
  </Svg>
);
export default IconlystTrueUSDBulk;
