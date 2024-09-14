import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudFlashBulk = ({
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
      d="M18.244 8.225a.32.32 0 0 1-.276-.267C17.652 6.07 16.135 3.14 12.5 3.14c-3.633 0-5.15 2.929-5.466 4.817a.32.32 0 0 1-.276.267c-2.391.322-4.005 2.172-4.005 4.704a4.78 4.78 0 0 0 2.818 4.348 5.3 5.3 0 0 0 1.895.385h.363c.216 0 .362-.222.313-.431a2.46 2.46 0 0 1 .224-1.74l1.861-3.418a2.5 2.5 0 0 1 4.62 1.806.38.38 0 0 0 .241.447c.548.191 1.021.57 1.326 1.084a2.46 2.46 0 0 1 .273 1.82c-.05.21.097.432.313.432h.528c.36 0 1.084-.05 1.925-.394a4.77 4.77 0 0 0 2.793-4.34c0-2.53-1.613-4.38-4.002-4.703"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.265 15.936h-2.44l1.257-2.312a.75.75 0 1 0-1.318-.716l-1.86 3.42a.75.75 0 0 0 .66 1.108h2.438l-1.258 2.31a.75.75 0 0 0 1.317.719l1.862-3.42a.75.75 0 0 0-.658-1.11"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudFlashBulk;
