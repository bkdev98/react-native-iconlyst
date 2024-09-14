import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystElevatorBold = ({
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
      d="M3.923 4.068c.932-1 2.266-1.568 3.86-1.568h8.434c1.597 0 2.931.567 3.863 1.568.928.997 1.42 2.383 1.42 3.958v7.948c0 1.575-.492 2.961-1.42 3.958-.932 1-2.266 1.568-3.864 1.568H7.782c-1.597 0-2.93-.567-3.862-1.568-.928-.997-1.42-2.383-1.42-3.958V8.026c0-1.576.494-2.962 1.423-3.958M7.008 9.3a.75.75 0 1 0 0 1.5h2.15l3.663 4.03a.75.75 0 0 0 .555.245h3.407a.75.75 0 0 0 0-1.5h-3.075l-3.664-4.03a.75.75 0 0 0-.555-.245zm7.735 0a.75.75 0 0 0 0 1.5h2.25a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystElevatorBold;
