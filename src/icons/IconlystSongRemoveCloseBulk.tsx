import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongRemoveCloseBulk = ({
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
      d="M12.57 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5c.733 0 1.443-.09 2.127-.25.182-.043.273-.242.206-.416a4.9 4.9 0 0 1-.335-1.759 4.963 4.963 0 0 1 4.963-4.963c.652 0 1.268.137 1.837.37.172.07.373-.019.418-.2A9.4 9.4 0 0 0 22.07 12c0-5.238-4.26-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.23 18.769 1.145-1.144a.75.75 0 1 0-1.062-1.061l-1.143 1.144-1.145-1.143a.75.75 0 0 0-1.06 1.06l1.143 1.144-1.145 1.145a.749.749 0 1 0 1.061 1.06l1.145-1.144 1.145 1.145a.751.751 0 0 0 1.061-1.061zM15.837 9.607a.75.75 0 0 1-.948.476 3.3 3.3 0 0 1-1.054-.58l-.515 4.274q-.002.005-.003.01a2.857 2.857 0 0 1-3.172 2.482 2.83 2.83 0 0 1-1.902-1.07 2.84 2.84 0 0 1-.589-2.103 2.86 2.86 0 0 1 3.174-2.49c.488.057.926.248 1.301.515l.457-3.789a.75.75 0 0 1 .697-.659.76.76 0 0 1 .774.565c.013.047.307 1.09 1.304 1.421a.75.75 0 0 1 .476.948m-5.35 2.477q.08 0 .162.01c.74.089 1.27.764 1.181 1.505a1.355 1.355 0 0 1-2.408.673 1.355 1.355 0 0 1 1.065-2.188"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongRemoveCloseBulk;
