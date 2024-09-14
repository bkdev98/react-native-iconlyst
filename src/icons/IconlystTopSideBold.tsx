import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTopSideBold = ({
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
      d="M8.886 16.198a.75.75 0 0 0 1.061-.04L12 13.946l2.054 2.212a.75.75 0 0 0 1.061.04.75.75 0 0 0 .039-1.06l-2.604-2.804a.75.75 0 0 0-1.1 0l-2.603 2.804a.75.75 0 0 0 .039 1.06M21.2 9.291a.3.3 0 0 1 .3.3v6.625c0 3.16-2.22 5.284-5.526 5.284H8.027c-3.306 0-5.527-2.123-5.527-5.283V9.591a.3.3 0 0 1 .3-.3zM2.8 7.782a.29.29 0 0 1-.293-.3C2.643 4.489 4.827 2.5 8.027 2.5h7.947c3.2 0 5.383 1.99 5.52 4.982a.29.29 0 0 1-.294.3z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTopSideBold;
