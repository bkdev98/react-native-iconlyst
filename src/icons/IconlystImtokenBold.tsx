import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImtokenBold = ({
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
      d="M21.445 5.986c-.019-.094-.083-.33-.27-.485a1 1 0 0 0-.385-.186c-3.453-.723-7.159 1.446-8.325 2.55-.235.226-.72.697-.709 1.305-.109 2.212-1.476 3.757-3.482 3.936-.863.075-1.679-.14-2.294-.608-.578-.439-.929-1.052-.986-1.727-.123-1.418.752-1.787.992-1.808.537-.042.831.155.87.596a1 1 0 0 1-.04.405 2 2 0 0 0-.063.75c.053.382.254.725.563.965.311.242.707.348 1.068.303.476-.04.935-.286 1.262-.675.277-.329.59-.922.504-1.877C10 7.71 8.276 6.398 6.396 6.556c-2.075.192-4.17 1.99-3.868 5.481.163 1.872 1.041 3.525 2.54 4.782 1.571 1.318 3.664 2.042 5.847 2.042q.435 0 .873-.039c5.076-.438 10.265-4.622 9.657-12.836"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImtokenBold;
