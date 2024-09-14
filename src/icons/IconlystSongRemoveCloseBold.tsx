import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongRemoveCloseBold = ({
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
      d="M10.079 12.094a1.355 1.355 0 0 0-1.227 2.178 1.355 1.355 0 0 0 2.408-.673 1.354 1.354 0 0 0-1.181-1.505"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.267 9.607a.75.75 0 0 1-.948.476 3.3 3.3 0 0 1-1.054-.58l-.515 4.274q-.002.005-.003.009a2.857 2.857 0 0 1-3.172 2.483 2.83 2.83 0 0 1-1.902-1.071 2.84 2.84 0 0 1-.589-2.102 2.86 2.86 0 0 1 3.174-2.491c.488.058.926.249 1.301.516l.457-3.789a.75.75 0 0 1 .697-.659.76.76 0 0 1 .774.565c.011.039.303 1.089 1.304 1.421a.75.75 0 0 1 .476.948M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5c.733 0 1.443-.09 2.127-.25.181-.043.273-.242.206-.416a4.9 4.9 0 0 1-.335-1.759 4.963 4.963 0 0 1 4.963-4.963c.652 0 1.268.137 1.837.37.172.07.373-.019.418-.2A9.4 9.4 0 0 0 21.5 12c0-5.238-4.261-9.5-9.5-9.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m19.66 18.769 1.145-1.144a.75.75 0 1 0-1.061-1.061l-1.145 1.143-1.143-1.143a.75.75 0 0 0-1.061 1.06l1.143 1.145-1.145 1.145a.749.749 0 1 0 1.061 1.06l1.145-1.145 1.145 1.145a.751.751 0 0 0 1.061-1.06z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongRemoveCloseBold;
