import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageRefresh3Outline = ({
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
      d="M4.301 3.849C5.257 2.823 6.618 2.25 8.222 2.25h8.144c1.609 0 2.97.573 3.925 1.599.95 1.02 1.442 2.427 1.442 4.004v4.854a.75.75 0 0 1-1.5 0v-2.69H4.355v5.508c0 1.267.393 2.286 1.04 2.982.642.69 1.59 1.12 2.827 1.12h1.69a.75.75 0 0 1 0 1.5h-1.69c-1.608 0-2.97-.572-3.924-1.598-.95-1.02-1.443-2.427-1.443-4.004V7.853c0-1.578.496-2.985 1.446-4.004m.054 4.669h15.878v-.665c0-1.267-.392-2.287-1.04-2.982-.641-.69-1.589-1.121-2.827-1.121H8.222c-1.233 0-2.18.431-2.824 1.121-.648.696-1.043 1.716-1.043 2.982zm1.675-2.09a.75.75 0 0 1 .75-.75h.054a.75.75 0 0 1 0 1.5H6.78a.75.75 0 0 1-.75-.75m2.4 0a.75.75 0 0 1 .75-.75h.054a.75.75 0 1 1 0 1.5h-.053a.75.75 0 0 1-.75-.75m2.4 0a.75.75 0 0 1 .75-.75h.054a.75.75 0 0 1 0 1.5h-.053a.75.75 0 0 1-.75-.75m5.223 8.578q.311-.079.648-.08a2.66 2.66 0 0 1 2.662 2.662.75.75 0 1 0 1.5 0 4.162 4.162 0 0 0-6.916-3.12.75.75 0 0 0 .157 1.23l1.68.853a.75.75 0 1 0 .679-1.337zm-2.764 1.832a.75.75 0 0 1 .75.75 2.662 2.662 0 0 0 3.31 2.583l-.41-.208a.75.75 0 0 1 .679-1.338l1.68.853a.75.75 0 0 1 .156 1.231 4.162 4.162 0 0 1-6.915-3.121.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPageRefresh3Outline;
