import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareAppleWatchAppsOutline = ({
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
      d="M15.185 19.176h-5.87a3.755 3.755 0 0 1-4.06-4.032v-6.28a3.727 3.727 0 0 1 4.06-3.971h5.876a4.12 4.12 0 0 1 3 1.093 3.95 3.95 0 0 1 1.056 2.88v6.33a3.73 3.73 0 0 1-4.062 3.98M9.314 6.393a2.26 2.26 0 0 0-2.564 2.47v6.28a2.284 2.284 0 0 0 2.56 2.533h5.87a2.265 2.265 0 0 0 2.56-2.48V8.865a2.46 2.46 0 0 0-.619-1.818 2.67 2.67 0 0 0-1.935-.653z"
    />
    <Path
      fill={props.color}
      d="M14.15 14.657a.75.75 0 0 1-.75-.75.79.79 0 0 1 .75-.794.715.715 0 0 1 .75.706v.088a.75.75 0 0 1-.75.75m-3.811 0a.75.75 0 0 1-.75-.75.79.79 0 0 1 .75-.794.715.715 0 0 1 .75.706v.088a.75.75 0 0 1-.745.75zm3.81-3.814a.75.75 0 0 1-.75-.75.79.79 0 0 1 .75-.793.714.714 0 0 1 .75.706v.087a.75.75 0 0 1-.75.75m-3.81 0a.75.75 0 0 1-.75-.75.79.79 0 0 1 .75-.793.714.714 0 0 1 .75.706v.087a.75.75 0 0 1-.745.75zM14.226 22.75H10.27a2.62 2.62 0 0 1-2.553-2.068l-.478-2.25a.75.75 0 0 1 1.468-.312l.477 2.251a1.115 1.115 0 0 0 1.086.878h3.955a1.11 1.11 0 0 0 1.084-.878l.479-2.25a.75.75 0 0 1 1.467.31l-.48 2.251a2.62 2.62 0 0 1-2.55 2.067M16.521 6.474a.75.75 0 0 1-.732-.594l-.478-2.251a1.116 1.116 0 0 0-1.085-.879h-3.955a1.116 1.116 0 0 0-1.086.879L8.708 5.88a.75.75 0 1 1-1.468-.312l.477-2.25a2.624 2.624 0 0 1 2.554-2.068h3.955a2.62 2.62 0 0 1 2.552 2.068l.477 2.25a.75.75 0 0 1-.734.906"
    />
  </Svg>
);
export default IconlystSquareAppleWatchAppsOutline;
