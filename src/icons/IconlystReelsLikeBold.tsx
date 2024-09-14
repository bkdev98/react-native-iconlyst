import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReelsLikeBold = ({
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
      d="M14.213 6.73a.3.3 0 0 0 .3-.3c.001-1.143.01-2.926.012-3.63.001-.166-.133-.3-.3-.3H9.773c-.166 0-.3.134-.3.3.004.702.011 2.477.013 3.63a.3.3 0 0 0 .3.3zM16.013 6.43a.3.3 0 0 0 .3.3h4.301a.287.287 0 0 0 .286-.345c-.498-2.24-2.305-3.755-4.6-3.877a.287.287 0 0 0-.3.292c.004.704.011 2.487.013 3.63M7.686 6.73a.3.3 0 0 0 .3-.3c.001-1.143.009-2.926.012-3.63a.287.287 0 0 0-.3-.292c-2.293.123-4.1 1.64-4.596 3.877-.04.18.101.345.285.345zM15.562 14.934c-.594 1.89-2.945 3.229-3.21 3.374a.75.75 0 0 1-.72.003c-.265-.145-2.6-1.46-3.216-3.377-.492-1.53.23-3.086 1.642-3.542a2.63 2.63 0 0 1 1.804.07.34.34 0 0 0 .26 0 2.62 2.62 0 0 1 1.794-.07c1.416.457 2.138 2.013 1.646 3.542M3.252 8.23a.3.3 0 0 0-.3.3v7.7c0 3.153 2.026 5.27 5.043 5.27h8.012c3.016 0 5.043-2.117 5.043-5.27v-7.7a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.457 12.819a1.13 1.13 0 0 0-1.02.174.75.75 0 0 1-.902-.005 1.1 1.1 0 0 0-.668-.224q-.177 0-.35.055c-.708.229-.876 1.023-.672 1.654.283.881 1.278 1.716 1.981 2.194a.29.29 0 0 0 .323 0c.709-.483 1.711-1.322 1.984-2.188.205-.636.036-1.431-.676-1.66"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReelsLikeBold;
