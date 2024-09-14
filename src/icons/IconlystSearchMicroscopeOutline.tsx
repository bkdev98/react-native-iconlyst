import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchMicroscopeOutline = ({
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
      d="M11.882 3.75a7.668 7.668 0 1 0 5.191 13.31l.008-.006.049-.045A7.667 7.667 0 0 0 11.883 3.75m6.788 13.83a9.14 9.14 0 0 0 2.38-6.162 9.167 9.167 0 0 0-9.168-9.168 9.167 9.167 0 0 0-9.167 9.168 9.168 9.168 0 0 0 14.859 7.188l2.933 2.925a.75.75 0 1 0 1.06-1.062zM14.308 7.133a.32.32 0 1 0 .001.638.32.32 0 0 0-.001-.638m-1.818.32a1.82 1.82 0 1 1 3.638-.001 1.82 1.82 0 0 1-3.638 0M8.45 6.451a.75.75 0 0 1 1.06 0l1.134 1.134a.75.75 0 1 1-1.06 1.06L8.45 7.513a.75.75 0 0 1 0-1.061m9.744 2.795a.75.75 0 0 1-.498.936l-.128.039a.75.75 0 1 1-.438-1.435l.128-.039a.75.75 0 0 1 .936.499m-11.74-.1a.75.75 0 0 1 .997-.36l.083.039a.75.75 0 1 1-.638 1.357l-.083-.039a.75.75 0 0 1-.36-.998m6.684 1.549a.75.75 0 0 1 0 1.06l-1.133 1.134a.75.75 0 0 1-1.061-1.06l1.133-1.134a.75.75 0 0 1 1.061 0m2.887 1.75a.32.32 0 1 0 .001.638.32.32 0 0 0-.001-.639m-1.818.319a1.82 1.82 0 1 1 3.638 0 1.82 1.82 0 0 1-3.638 0m-6.492.118a.32.32 0 0 0-.318.32.319.319 0 1 0 .638 0 .32.32 0 0 0-.32-.32m-1.818.32a1.818 1.818 0 1 1 3.637-.002 1.818 1.818 0 0 1-3.637.002m6.373 2.004a.75.75 0 0 1-.38.99l-1.466.652a.75.75 0 0 1-.61-1.371l1.466-.652a.75.75 0 0 1 .99.38m2.42.835a.75.75 0 0 1-.73.769l-.118.003a.75.75 0 1 1-.037-1.5l.117-.003a.75.75 0 0 1 .768.731"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchMicroscopeOutline;
