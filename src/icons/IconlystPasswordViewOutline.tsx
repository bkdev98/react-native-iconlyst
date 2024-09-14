import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordViewOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.945 4.859c.956-1.026 2.317-1.6 3.922-1.6h8.146c1.609 0 2.97.574 3.926 1.6.95 1.02 1.443 2.428 1.443 4.005v2.162a.75.75 0 0 1-1.5 0V8.864c0-1.267-.393-2.287-1.04-2.983-.643-.69-1.59-1.121-2.829-1.121H7.867c-1.233 0-2.181.431-2.825 1.122C4.394 6.578 4 7.598 4 8.864v3.916c0 1.267.393 2.287 1.04 2.982.642.69 1.59 1.122 2.828 1.122h2.408a.75.75 0 1 1 0 1.5H7.867c-1.609 0-2.97-.573-3.926-1.6-.95-1.02-1.442-2.427-1.442-4.004V8.864c0-1.578.496-2.985 1.446-4.005M17.55 16.83a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.93 10.758a1.01 1.01 0 1 1 2.021 0 1.01 1.01 0 0 1-2.02 0M14.835 10.758a1.01 1.01 0 1 1 2.02 0 1.01 1.01 0 0 1-2.02 0M7.026 10.758a1.01 1.01 0 1 1 2.021 0 1.01 1.01 0 1 1-2.02 0M17.55 21.307l-.004-.003-.004.003c-1.919-.001-3.53-1.374-4.391-3.378a.75.75 0 0 1 0-.592c.842-1.959 2.404-3.315 4.268-3.374q.063-.003.127-.002.063 0 .126.002c1.865.059 3.426 1.415 4.269 3.374a.75.75 0 0 1 0 .592c-.861 2.004-2.473 3.377-4.392 3.378m-2.885-3.674c.719 1.454 1.82 2.174 2.88 2.175s2.161-.72 2.88-2.175c-.719-1.452-1.82-2.172-2.88-2.172s-2.161.72-2.88 2.172"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPasswordViewOutline;
