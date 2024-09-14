import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerRefresh3Bold = ({
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
      d="M7.765 2.389h7.9c3.35 0 5.6 2.13 5.6 5.3v3.15a.3.3 0 0 1-.3.3h-18.4a.3.3 0 0 1-.3-.3v-3.15c0-3.12 2.26-5.3 5.5-5.3m4.1 5.65h4.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-4.5c-.41 0-.75.34-.75.75s.34.75.75.75m-4.7 0h.5a.749.749 0 1 0 0-1.5h-.5c-.41 0-.75.34-.75.75s.34.75.75.75M2.265 12.939a.3.3 0 0 1 .3-.3h10.099c.291 0 .428.395.22.6a6.06 6.06 0 0 0-1.809 4.33c0 1.225.357 2.358.975 3.314.137.21-.008.506-.26.506H7.766c-3.29 0-5.5-2.13-5.5-5.3zm4.9 4.3h.5a.749.749 0 1 0 0-1.5h-.5c-.41 0-.75.34-.75.75s.34.75.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M19.305 19.384c-.325.271-.994.726-1.82.726a2.62 2.62 0 0 1-2.65-2.65.75.75 0 0 0-1.5 0c0 2.327 1.823 4.15 4.15 4.15 1.233 0 2.192-.584 2.78-1.074a.75.75 0 0 0-.96-1.152M14.806 14.284c.588-.49 1.548-1.074 2.779-1.074 2.327 0 4.15 1.823 4.15 4.15a.75.75 0 0 1-1.5 0 2.62 2.62 0 0 0-2.65-2.65c-.783 0-1.422.395-1.82.726a.75.75 0 1 1-.96-1.152"
    />
  </Svg>
);
export default IconlystServerRefresh3Bold;
