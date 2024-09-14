import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFocusFrameBold = ({
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
      d="M15.794 12.976a.74.74 0 0 1-.68.44c-.11 0-.21-.02-.31-.06-1.94-.87-3.83-.87-5.78 0a.75.75 0 0 1-.61-1.37c2.32-1.04 4.68-1.04 7 0 .38.17.55.61.38.99m2.57 1.96v-5.25c0-2.28-1.47-3.82-3.66-3.82h-5.58c-2.19 0-3.66 1.54-3.66 3.82v5.25c0 2.29 1.47 3.82 3.66 3.82h5.58c2.19 0 3.66-1.53 3.66-3.82M17.107 2.55H15.85a.75.75 0 0 0 0 1.5h1.257a3.147 3.147 0 0 1 3.143 3.143V8.77a.75.75 0 0 0 1.5 0V7.193a4.65 4.65 0 0 0-4.643-4.643M3 9.519a.75.75 0 0 0 .75-.75V7.192a3.147 3.147 0 0 1 3.143-3.143h1.289a.75.75 0 0 0 0-1.5H6.893A4.65 4.65 0 0 0 2.25 7.192v1.577c0 .414.336.75.75.75M8.15 20.553H6.893a3.146 3.146 0 0 1-3.143-3.142v-1.577a.75.75 0 0 0-1.5 0v1.577a4.65 4.65 0 0 0 4.643 4.642H8.15a.75.75 0 0 0 0-1.5M21 15.084a.75.75 0 0 0-.75.75v1.577a3.146 3.146 0 0 1-3.143 3.142h-1.29a.75.75 0 0 0 0 1.5h1.29a4.65 4.65 0 0 0 4.643-4.642v-1.577a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFocusFrameBold;
