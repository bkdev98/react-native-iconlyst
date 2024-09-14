import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlowerBold = ({
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
      d="M5.57 12.004a3.66 3.66 0 0 1-1.414-3.736 3.662 3.662 0 0 1 5.092-2.553 3.652 3.652 0 0 1 7.255.035 3.653 3.653 0 0 1 3.699 6.26A3.663 3.663 0 0 1 16.52 18.3a3.66 3.66 0 0 1-3.645 3.199 3.66 3.66 0 0 1-3.638-3.19c-.47.212-.982.32-1.5.317q-.433-.001-.855-.101a3.66 3.66 0 0 1-1.313-6.522m7.313-2.182a2.18 2.18 0 1 1-.002 4.36 2.18 2.18 0 0 1 .002-4.36"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlowerBold;
