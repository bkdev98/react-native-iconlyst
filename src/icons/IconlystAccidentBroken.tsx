import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAccidentBroken = ({
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
      d="M15.492 18.332q-.003.248.064.486a1.798 1.798 0 0 0 3.464 0 1.7 1.7 0 0 0 .072-.486 1.801 1.801 0 0 0-3.072-1.274 1.8 1.8 0 0 0-.528 1.274M21 8.657h-.82a1.11 1.11 0 0 0-.963.575l-1.017 1.89M19.326 18.331H21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 13.058h-5.517a2.01 2.01 0 0 0-2.006 2.006v1.558a2.007 2.007 0 0 0 2.006 2.006M8.508 18.332q0 .248-.072.486a1.8 1.8 0 0 1-3.465 0 1.7 1.7 0 0 1-.063-.486 1.801 1.801 0 0 1 3.073-1.274c.338.338.527.796.527 1.274M3 8.657h.81a1.1 1.1 0 0 1 .963.576l1.021 1.89M4.674 18.331H3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 13.057h5.517a2.01 2.01 0 0 1 2.007 2.007v1.557a2.007 2.007 0 0 1-2.007 2.007M9.632 10.33 7.283 8.836l1.9-.819-1.027-2.763 2.655 1.476M12.36 3.869l1.052 3.303 3.186-.504-1.809 4.004M12.144 11.356l-.171-2.052"
    />
  </Svg>
);
export default IconlystAccidentBroken;
