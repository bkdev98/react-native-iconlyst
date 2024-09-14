import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarTemperatureOutline = ({
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
      d="M5.147 20.64c-.54 0-1.04.126-1.388.336a.75.75 0 1 1-.775-1.284c.633-.383 1.418-.552 2.163-.552s1.53.17 2.163.552a.75.75 0 0 1-.775 1.284c-.347-.21-.848-.336-1.388-.336"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.28 19.946a.75.75 0 0 1 1.03-.254c.348.21.848.336 1.388.336s1.041-.127 1.389-.336a.75.75 0 1 1 .775 1.284c-.634.383-1.419.552-2.164.552-.744 0-1.529-.17-2.163-.552a.75.75 0 0 1-.254-1.03"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 20.64c-.54 0-1.04.126-1.388.336a.75.75 0 1 1-.775-1.284c.633-.383 1.418-.552 2.163-.552s1.53.17 2.163.552a.75.75 0 0 1-.775 1.284c-.347-.21-.848-.336-1.388-.336"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.384 19.946a.75.75 0 0 1 1.03-.254c.347.21.847.336 1.388.336s1.04-.127 1.388-.336a.75.75 0 1 1 .775 1.284c-.634.383-1.419.552-2.163.552-.745 0-1.53-.17-2.164-.552a.75.75 0 0 1-.254-1.03"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.353 20.64c-.54 0-1.04.126-1.388.336a.75.75 0 1 1-.775-1.284c.633-.383 1.418-.552 2.163-.552s1.53.17 2.163.552a.75.75 0 1 1-.775 1.284c-.347-.21-.848-.336-1.388-.336M5.147 17.532c-.54 0-1.04.127-1.388.337a.75.75 0 0 1-.775-1.285c.633-.382 1.418-.552 2.163-.552s1.53.17 2.163.552a.75.75 0 1 1-.775 1.285c-.347-.21-.848-.337-1.388-.337M19.353 17.532c-.54 0-1.04.127-1.388.337a.75.75 0 1 1-.775-1.285c.633-.382 1.418-.552 2.163-.552s1.53.17 2.163.552a.75.75 0 1 1-.775 1.285c-.347-.21-.848-.337-1.388-.337M12.25 3.75a1.62 1.62 0 0 0-1.62 1.62v4.76a.75.75 0 0 1-.298.6 3.18 3.18 0 0 0-1.284 2.545 3.202 3.202 0 0 0 6.404 0 3.18 3.18 0 0 0-1.282-2.546.75.75 0 0 1-.298-.598V5.37c0-.895-.726-1.621-1.622-1.621M9.13 5.37a3.12 3.12 0 1 1 6.242 0v4.407a4.67 4.67 0 0 1 1.58 3.498 4.702 4.702 0 0 1-9.404 0c0-1.4.62-2.643 1.581-3.498z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 12.86a.415.415 0 1 0 0 .83.415.415 0 0 0 0-.83m-1.915.415a1.915 1.915 0 1 1 3.83 0 1.915 1.915 0 0 1-3.83 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 6.202a.75.75 0 0 1 .75.75v5.158a.75.75 0 0 1-1.5 0V6.952a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCarTemperatureOutline;
