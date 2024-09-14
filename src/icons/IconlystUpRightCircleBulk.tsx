import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpRightCircleBulk = ({
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
      d="M20.507 11.956c-.149-4.35-3.576-7.881-7.884-8.195a8.46 8.46 0 0 0-4.683 1.01 8.52 8.52 0 0 0-4.446 7.773c.148 4.35 3.576 7.881 7.883 8.195q.308.023.622.023a8.518 8.518 0 0 0 8.507-8.806"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.923 3.541H16.09a.75.75 0 0 0 0 1.5h2.018l-5.173 5.173a.749.749 0 1 0 1.06 1.06l5.174-5.173v2.02a.75.75 0 0 0 1.5 0V4.29a.75.75 0 0 0-.746-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpRightCircleBulk;