import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchFilterBroken = ({
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
      d="M19.47 12.567a8.272 8.272 0 0 1-15.471 2.867M3 11.49c0-4.22 3.16-7.7 7.24-8.207M16.9 17.547l3.366 3.357M20.513 5.77 18.59 7.672a.6.6 0 0 0-.198.447v.776a.6.6 0 0 1-.379.558l-.735.293a.6.6 0 0 1-.823-.558v-1.26a.6.6 0 0 0-.176-.424l-1.705-1.518a1.47 1.47 0 0 1-.431-1.04v-.802c0-.578.47-1.048 1.048-1.048h4.76"
    />
  </Svg>
);
export default IconlystSearchFilterBroken;
