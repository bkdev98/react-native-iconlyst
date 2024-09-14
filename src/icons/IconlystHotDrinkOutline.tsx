import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHotDrinkOutline = ({
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
      d="M8.98 3.25a.75.75 0 0 1 .75.75v1.549a.75.75 0 1 1-1.5 0V4a.75.75 0 0 1 .75-.75m3.27 0A.75.75 0 0 1 13 4v1.549a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75m3.27 0a.75.75 0 0 1 .75.75v1.549a.75.75 0 1 1-1.5 0V4a.75.75 0 0 1 .75-.75M7.042 9.174c-.738 0-1.336.598-1.336 1.336v2.195a6.544 6.544 0 1 0 13.089 0V10.51c0-.738-.599-1.336-1.337-1.336zM4.206 10.51a2.836 2.836 0 0 1 2.836-2.836H17.46a2.836 2.836 0 0 1 2.836 2.836v2.195a8.03 8.03 0 0 1-3.367 6.545h2.437a.75.75 0 0 1 0 1.5H5.135a.75.75 0 0 1 0-1.5h2.437a8.03 8.03 0 0 1-3.366-6.545z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHotDrinkOutline;
