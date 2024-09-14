import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFoodSpottingCircleOutline = ({
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
      d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75m0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M12 17.763c-1.48 0-2.95-.57-4.05-1.67a5.74 5.74 0 0 1-.97-6.78 5.73 5.73 0 0 1 5.36-2.95c.38.01.72.24.9.6.19.4.15.89-.11 1.25-.38.51-.48 1.17-.27 1.77.27.79 1.01 1.32 1.84 1.32.42 0 .82-.14 1.15-.38.36-.26.84-.3 1.23-.12.36.17.59.51.62.9.13 2.2-1.03 4.3-2.96 5.35-.86.47-1.8.7-2.73.7zm-.41-9.88c-1.38.13-2.62.94-3.29 2.16-.89 1.63-.6 3.68.71 5a4.21 4.21 0 0 0 5 .71 4.22 4.22 0 0 0 2.17-3.28c-.45.22-.95.33-1.47.34h-.01c-1.48 0-2.79-.94-3.27-2.34-.29-.86-.23-1.79.16-2.59m.66-.01h.02z"
    />
  </Svg>
);
export default IconlystFoodSpottingCircleOutline;
