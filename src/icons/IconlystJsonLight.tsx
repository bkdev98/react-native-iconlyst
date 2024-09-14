import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystJsonLight = ({
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
      d="M11.981 3.012A9.075 9.075 0 0 0 3 12.016 9.07 9.07 0 0 0 11.981 21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.975 7.66a4.57 4.57 0 0 1 2.645 4.382 4.585 4.585 0 0 1-2.636 4.355"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.98 7.658c-2.632-.907-5.855 1.261-5.855 5.605 0 7.093 5.256 7.737 5.893 7.737A9.075 9.075 0 0 0 21 11.996a9.07 9.07 0 0 0-8.982-8.985c1.097-.152 5.91 1.187 5.91 7.767 0 4.29-3.594 6.626-5.932 5.628a4.57 4.57 0 0 1-2.645-4.381 4.61 4.61 0 0 1 2.629-4.367"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystJsonLight;
