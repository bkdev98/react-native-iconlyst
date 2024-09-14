import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanImageBold = ({
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
      d="M17.107 2.552H15.85a.75.75 0 0 0 0 1.5h1.258a3.147 3.147 0 0 1 3.143 3.143v1.577a.75.75 0 0 0 1.5 0V7.195a4.65 4.65 0 0 0-4.643-4.643M3 9.52a.75.75 0 0 0 .75-.75V7.195A3.147 3.147 0 0 1 6.893 4.05h1.289a.75.75 0 0 0 0-1.5h-1.29A4.65 4.65 0 0 0 2.25 7.194V8.77c0 .414.336.75.75.75M8.15 20.551H6.892a3.146 3.146 0 0 1-3.142-3.142v-1.577a.75.75 0 0 0-1.5 0v1.577a4.65 4.65 0 0 0 4.642 4.642H8.15a.75.75 0 0 0 0-1.5M21 15.082a.75.75 0 0 0-.75.75v1.577a3.146 3.146 0 0 1-3.143 3.142h-1.29a.75.75 0 0 0 0 1.5h1.29a4.65 4.65 0 0 0 4.643-4.642v-1.577a.75.75 0 0 0-.75-.75M6.167 14.833c.227.406.64.648 1.104.648h9.458a1.25 1.25 0 0 0 1.103-.647 1.25 1.25 0 0 0-.025-1.276l-1.716-2.805a1.27 1.27 0 0 0-.983-.601 1.24 1.24 0 0 0-1.058.44l-.647.759c-.072.085-.156.105-.213.092a.26.26 0 0 1-.204-.11l-1.801-2.531a1.26 1.26 0 0 0-2.106.071l-2.884 4.68a1.25 1.25 0 0 0-.028 1.28"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScanImageBold;
