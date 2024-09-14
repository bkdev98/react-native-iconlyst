import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMouse4Outline = ({
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
      d="M4.803 9.297C4.802 5.363 8.179 2.25 12.249 2.25c4.066 0 7.444 3.11 7.445 7.045l.002 5.408c0 3.934-3.378 7.047-7.446 7.047s-7.445-3.11-7.445-7.044zm1.5 0 .002 5.409c0 3.019 2.617 5.544 5.945 5.544s5.946-2.526 5.946-5.547l-.002-5.408c-.001-3.02-2.619-5.545-5.945-5.545-3.33 0-5.947 2.527-5.946 5.547"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.805 10.172a.75.75 0 0 1 .75-.75h13.392a.75.75 0 0 1 0 1.5H5.555a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 2.262a.75.75 0 0 1 .75.75v7.162a.75.75 0 0 1-1.5 0V3.012a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMouse4Outline;
