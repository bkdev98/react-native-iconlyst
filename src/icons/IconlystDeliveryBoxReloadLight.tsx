import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxReloadLight = ({
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
      d="M16.387 10.347v2.887c0 .373-.198.717-.521.904l-2.5 1.443c-.323.186-.721.186-1.044 0l-2.5-1.443a1.05 1.05 0 0 1-.522-.904v-2.887c0-.372.2-.718.522-.903L12.322 8c.323-.186.72-.186 1.044 0l2.5 1.444c.323.185.521.53.521.903M3.85 17.842l2.682.533.53-2.668"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.515 18.05a8.761 8.761 0 0 1 7.853-14.708"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.447 9.813 3.395 1.964 3.395-1.964M12.844 15.726v-3.952M21.85 6.158l-2.683-.533-.53 2.667"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.184 5.95a8.761 8.761 0 0 1-7.852 14.708"
    />
  </Svg>
);
export default IconlystDeliveryBoxReloadLight;