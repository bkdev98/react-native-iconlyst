import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLayersOutline = ({
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
      d="m7.343 10.714-1.601.917-.4.225a.51.51 0 0 0 0 .886l5.432 3.053c1.032.58 2.288.58 3.32 0l5.433-3.052a.51.51 0 0 0 0-.887l-.395-.222-1.635-.885.713-1.319 1.651.893.4.225c1.364.766 1.364 2.736 0 3.502l-5.432 3.053a4.89 4.89 0 0 1-4.79 0L4.606 14.05c-1.363-.766-1.363-2.736 0-3.502l.398-.223 1.594-.913z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m19.395 16.092-1.812-.921.68-1.337 1.81.92c1.433.723 1.477 2.76.08 3.545l-5.325 2.991a4.89 4.89 0 0 1-4.79 0l-5.246-2.948c-1.42-.798-1.345-2.877.13-3.569l1.821-.876.65 1.352-1.833.882a.51.51 0 0 0-.033.904l5.247 2.947c1.031.58 2.287.58 3.32 0l5.324-2.991a.51.51 0 0 0-.02-.897zM14.094 4.353a3.39 3.39 0 0 0-3.32 0L5.341 7.405a.51.51 0 0 0 0 .887l5.433 3.052c1.032.58 2.288.58 3.32 0l5.433-3.052a.51.51 0 0 0 0-.887zm-4.055-1.308a4.89 4.89 0 0 1 4.79 0l5.433 3.052c1.363.766 1.363 2.737 0 3.502l-5.433 3.053a4.89 4.89 0 0 1-4.79 0L4.606 9.599l.368-.653-.368.653c-1.363-.765-1.363-2.736 0-3.502z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLayersOutline;
