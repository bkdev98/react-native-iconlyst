import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordUnlockBulk = ({
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
      d="M17.997 11.726c1.196 0 2.262.516 2.968 1.414.105.134.366.095.378-.075q.015-.211.015-.43v-4.05c0-3.308-2.123-5.53-5.283-5.53H7.64c-3.16 0-5.282 2.222-5.282 5.53v4.05c0 3.307 2.123 5.53 5.282 5.53h5.288a.313.313 0 0 0 .308-.3c.05-.94.346-1.8 1.047-2.475a.33.33 0 0 0 .1-.213 3.69 3.69 0 0 1 3.614-3.451"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M7.953 11.543a1.01 1.01 0 0 1-1.011-1.01 1.012 1.012 0 0 1 2.022 0c0 .557-.454 1.01-1.011 1.01M10.848 10.533a1.011 1.011 0 0 0 2.02 0 1.011 1.011 0 0 0-2.021 0M15.764 9.523c-.557 0-1.011.453-1.011 1.01s.454 1.01 1.01 1.01a1.011 1.011 0 0 0 0-2.02"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.115 15.674h2.366c1.192 0 2.161.97 2.161 2.16v1.6c0 1.191-.969 2.16-2.161 2.16h-2.843a2.16 2.16 0 0 1-2.16-2.16v-1.6c0-.819.464-1.524 1.137-1.89v-.55a2.45 2.45 0 0 1 2.408-2.42c.783 0 1.492.342 1.959.937a.75.75 0 1 1-1.178.927.97.97 0 0 0-.765-.364.947.947 0 0 0-.924.932zm2.366 4.42a.66.66 0 0 0 .661-.66v-1.6a.66.66 0 0 0-.661-.66h-2.843a.66.66 0 0 0-.66.66v1.6c0 .364.296.66.66.66z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPasswordUnlockBulk;
