import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCampTent2Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.876 20.98-3.184-7.913-5.253-5.755-2.046 2.295M4.125 20.98l3.184-7.913 1.283-1.44M12.565 7.308V3.02l3.55 1.48-3.542 1.478M3.5 20.978h10.699M17 20.978h4.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.308 13.067c.295 3.407 0 6.063-1.171 7.91M18.864 20.978c-1.172-1.849-1.466-4.504-1.172-7.912M12.563 12.49v8.488M8.629 20.943s3.925-4.211 3.925-7.591"
    />
  </Svg>
);
export default IconlystCampTent2Broken;
