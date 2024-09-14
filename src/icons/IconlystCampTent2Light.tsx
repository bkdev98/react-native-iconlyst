import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCampTent2Light = ({
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
      d="m3.625 20.98 3.184-7.913 5.253-5.755 5.13 5.754 3.184 7.914M12.065 7.308V3.02l3.55 1.48-3.542 1.478M3 20.978h18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.808 13.067c.295 3.407 0 6.063-1.171 7.91M18.364 20.978c-1.172-1.849-1.466-4.504-1.172-7.912M12.063 12.49v8.488M8.129 20.943s3.925-4.211 3.925-7.591"
    />
  </Svg>
);
export default IconlystCampTent2Light;
