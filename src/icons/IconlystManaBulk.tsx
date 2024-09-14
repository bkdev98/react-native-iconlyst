import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystManaBulk = ({
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
      d="M8.544 8.663c.01-.013.026-.018.037-.031a.7.7 0 0 1 .175-.15c.026-.017.048-.038.076-.051a.7.7 0 0 1 .307-.075l.01-.002h.008a.7.7 0 0 1 .309.075c.031.014.054.037.083.056q.095.058.168.142c.011.013.028.019.038.033l3.756 5.099 1.487-1.785c.007-.01.019-.012.026-.021.041-.044.09-.076.14-.11.034-.023.063-.05.1-.067.055-.025.116-.033.178-.045.035-.006.066-.024.102-.026q.007.001.014.003.009-.002.016-.003c.053 0 .1.019.15.03a.7.7 0 0 1 .257.106c.043.029.09.05.126.087l.003.002 4.624 4.724h.042A9.44 9.44 0 0 0 22 12.004c0-5.238-4.262-9.5-9.5-9.5S3 6.766 3 12.004a9.4 9.4 0 0 0 .646 3.417z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.324 14.292v2.361h2.311zM12.522 14.944 9.9 11.384v5.269h1.198zM8.4 16.653v-5.236l-3.795 5.236zM13.051 16.653h1.773v-2.127z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.272 18.154a9.48 9.48 0 0 0 7.228 3.351 9.48 9.48 0 0 0 7.228-3.35z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M10.61 5.957c0-.826-.673-1.502-1.502-1.502s-1.502.676-1.502 1.502.673 1.502 1.502 1.502 1.502-.676 1.502-1.502M17.574 8.004c0-1.1-.895-2-2-2s-2 .9-2 2 .896 2 2 2 2-.9 2-2"
    />
  </Svg>
);
export default IconlystManaBulk;
