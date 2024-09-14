import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTextFieldOutline = ({
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
      d="M9.237 3.914a.75.75 0 0 1 .75-.75h3.184a.75.75 0 0 1 0 1.5h-.842v14.663h.842a.75.75 0 1 1 0 1.5h-1.485a.8.8 0 0 1-.213 0H9.987a.75.75 0 0 1 0-1.5h.842V4.664h-.842a.75.75 0 0 1-.75-.75m-2.57 3.46a2.38 2.38 0 0 0-2.384 2.383v4.484a2.38 2.38 0 0 0 2.383 2.383h1.47a.75.75 0 0 1 0 1.5h-1.47a3.88 3.88 0 0 1-3.883-3.883V9.757a3.88 3.88 0 0 1 3.883-3.882h1.47a.75.75 0 1 1 0 1.5zm7.315-.75a.75.75 0 0 1 .75-.75h3.67a3.88 3.88 0 0 1 3.881 3.884v4.474a3.9 3.9 0 0 1-3.893 3.892h-3.658a.75.75 0 0 1 0-1.5h3.659a2.4 2.4 0 0 0 2.392-2.392V9.758a2.38 2.38 0 0 0-2.382-2.383h-3.669a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTextFieldOutline;
