import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongDownloadOutline = ({
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
      d="M12.25 21.75A9.75 9.75 0 1 1 22 12a.75.75 0 1 1-1.5 0 8.25 8.25 0 1 0-8.25 8.25.75.75 0 1 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M18.305 21.325a.75.75 0 0 1-.531-.22l-2.17-2.179a.75.75 0 0 1 1.063-1.058l1.638 1.644 1.638-1.644a.75.75 0 0 1 1.062 1.058l-2.17 2.178a.75.75 0 0 1-.53.221"
    />
    <Path
      fill={props.color}
      d="M18.307 21.326a.75.75 0 0 1-.75-.75v-5.478a.75.75 0 0 1 1.5 0v5.478a.75.75 0 0 1-.75.75M10.988 16.807q-.174 0-.347-.02a2.843 2.843 0 1 1 .347.02m-.007-4.205a1.354 1.354 0 0 0-1.342 1.191 1.353 1.353 0 0 0 2.686.323 1.354 1.354 0 0 0-1.181-1.5 1 1 0 0 0-.163-.014"
    />
    <Path
      fill={props.color}
      d="M13.07 14.958q-.044.001-.09-.005a.75.75 0 0 1-.654-.835l.755-6.266a.75.75 0 0 1 1.472-.093 2.18 2.18 0 0 0 1.3 1.42.75.75 0 1 1-.472 1.424 3.3 3.3 0 0 1-1.054-.58l-.515 4.275a.75.75 0 0 1-.741.66"
    />
  </Svg>
);
export default IconlystSongDownloadOutline;
