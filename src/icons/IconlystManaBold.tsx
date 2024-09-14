import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystManaBold = ({
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
      d="M15.824 14.293v2.36h2.311zM12.022 14.945 9.4 11.385v5.269h1.198zM7.9 16.654v-5.236l-3.795 5.236zM12.551 16.654h1.773v-2.127zM4.772 18.154A9.48 9.48 0 0 0 12 21.504a9.48 9.48 0 0 0 7.228-3.35z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.608 4.455c.829 0 1.502.676 1.502 1.502s-.673 1.502-1.502 1.502a1.505 1.505 0 0 1-1.502-1.502c0-.826.673-1.502 1.502-1.502m6.466 1.549c1.105 0 2 .9 2 2s-.895 2-2 2-2-.9-2-2 .896-2 2-2m-7.03 2.659c.01-.013.026-.018.037-.031a.7.7 0 0 1 .175-.15c.026-.017.048-.038.076-.051a.7.7 0 0 1 .307-.075l.01-.002h.008a.7.7 0 0 1 .309.075c.03.014.054.037.083.056q.095.058.168.142c.01.013.028.019.038.033l3.756 5.099 1.487-1.785c.007-.01.019-.012.026-.021.04-.044.09-.076.14-.11.034-.023.063-.05.1-.067.055-.025.116-.033.178-.045.035-.006.066-.024.102-.026q.007.001.014.003.008-.002.016-.003c.053 0 .1.019.15.03a.7.7 0 0 1 .257.106c.043.029.09.05.126.087q0 0 .003.002l4.624 4.724h.042a9.44 9.44 0 0 0 1.224-4.65c0-5.238-4.262-9.5-9.5-9.5s-9.5 4.262-9.5 9.5a9.4 9.4 0 0 0 .646 3.417z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystManaBold;
