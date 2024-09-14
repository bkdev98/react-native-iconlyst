import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperLockBold = ({
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
      d="M11.163 9.93a1.54 1.54 0 0 0 0 3.08 1.54 1.54 0 0 0 0-3.08"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.163 14.51a3.04 3.04 0 0 1-3.038-3.04 3.04 3.04 0 0 1 3.038-3.04 3.04 3.04 0 0 1 3.038 3.04 3.04 3.04 0 0 1-3.038 3.04M6.781 8.67H5.378a.75.75 0 0 1 0-1.5h1.403a.75.75 0 0 1 0 1.5m8.267 5.453c.107-.938.503-1.79 1.172-2.44a4.04 4.04 0 0 1 4.014-.957c.207.064.43-.083.43-.299V7.77c0-2.303-1.482-3.85-3.688-3.85H5.352c-2.206 0-3.688 1.547-3.688 3.85v7.4c0 2.303 1.482 3.85 3.69 3.85h8.35c.192 0 .334-.179.307-.37a3.4 3.4 0 0 1-.033-.467v-1.441c0-1.018.411-1.94 1.07-2.62"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.836 18.183a.52.52 0 0 1-.522.52H17.75a.52.52 0 0 1-.522-.52v-1.44c0-.287.234-.52.522-.52h2.564c.288 0 .522.233.522.52zm-2.35-4.17c.148-.143.33-.206.555-.22.425.005.763.34.77.75v.18h-1.56v-.16a.78.78 0 0 1 .234-.55m2.825.984v-.466a2.267 2.267 0 0 0-2.25-2.238c-.626-.027-1.185.22-1.62.645a2.27 2.27 0 0 0-.69 1.615v.445a2.01 2.01 0 0 0-1.023 1.745v1.44c0 1.114.907 2.02 2.022 2.02h2.564a2.024 2.024 0 0 0 2.022-2.02v-1.44c0-.75-.416-1.398-1.025-1.746"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperLockBold;
