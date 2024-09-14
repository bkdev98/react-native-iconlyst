import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSubtitleExploreOutline = ({
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
      d="M3.857 4.413c1-.955 2.398-1.405 4.001-1.405h8.459c1.607 0 3.005.45 4.004 1.406 1.005.961 1.508 2.341 1.504 4.003v2.969a.75.75 0 0 1-1.5 0V8.414c.003-1.355-.4-2.303-1.04-2.917-.647-.618-1.632-.99-2.968-.99H7.858c-1.331 0-2.317.372-2.965.991-.644.614-1.051 1.564-1.051 2.918V15.5c0 1.381.41 2.354 1.056 2.983.65.633 1.633 1.01 2.96 1.01h4.225a.75.75 0 0 1 0 1.5H7.858c-1.607 0-3.007-.462-4.006-1.435-1.004-.976-1.51-2.375-1.51-4.058V8.416c0-1.663.509-3.042 1.515-4.003"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.334 8.574a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75M6.596 12.375a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 0 1.5H7.346a.75.75 0 0 1-.75-.75m4.359 0a.75.75 0 0 1 .75-.75h.535a.75.75 0 0 1 0 1.5h-.535a.75.75 0 0 1-.75-.75m-4.418 3.457a.75.75 0 0 1 .75-.75h2.21a.75.75 0 0 1 0 1.5h-2.21a.75.75 0 0 1-.75-.75M17.63 14.477a2.166 2.166 0 1 0 .002 4.332 2.166 2.166 0 0 0-.001-4.332m3.008 4.263a3.666 3.666 0 1 0-1.092 1.03l1.008 1.004a.75.75 0 1 0 1.06-1.062z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSubtitleExploreOutline;
