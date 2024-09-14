import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonWindyLight = ({
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
      d="M18.938 11.799c-2.314.521-5.01-.486-6.565-2.042s-2.145-4.05-1.671-6.187c-4.976.408-9.016 6.814-5.466 12.431M12.725 19.846c-3.955-1.158-4.175.384-6.202.384M19.676 19.846s-1.29.539-3.21.584"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.601 13.981a7.6 7.6 0 0 1-2.165-.416 7.7 7.7 0 0 0-3.815-.316M3.055 17.064s1.87-1.348 5.188-1M14.32 17.121c2.488.53 4.377-.518 6.734-.808M19.055 3.57a3 3 0 0 0 2 2 3 3 0 0 0-2 2 3 3 0 0 0-2-2 3 3 0 0 0 2-2"
    />
  </Svg>
);
export default IconlystMoonWindyLight;
