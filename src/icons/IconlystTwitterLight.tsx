import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTwitterLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.4 7.838 21 5.417l-2.28.341S16.962 3.4 14.386 4.183c-2.086.634-2.926 3.095-2.732 4.616a13.2 13.2 0 0 1-7.667-3.834c-1.076 6.4 1.026 9.505 4.18 11.273A8.62 8.62 0 0 1 3 17.757c1.638 1.974 4.986 2.313 6.83 2.197 6.427-.406 10-5.458 9.596-11.884z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTwitterLight;
