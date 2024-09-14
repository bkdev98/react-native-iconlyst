import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunWindTwoTone = ({
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
      d="M12.155 3.544V4.9m8.9 7.543h-1.357m-15.086 0H3.255M18.448 6.15l-.96.96m-10.667 0-.959-.96M16.303 12.444a4.149 4.149 0 1 0-8.297 0c-.004.188.004.62.067.844"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.617 19.879c-3.911-1.146-4.129.379-6.133.379M19.491 19.878s-1.275.533-3.174.578M13.483 14.079a7.5 7.5 0 0 1-2.141-.412 7.65 7.65 0 0 0-3.773-.312M3.055 17.127s1.848-1.332 5.13-.988M14.195 17.185c2.46.524 4.328-.513 6.66-.8"
    />
  </Svg>
);
export default IconlystSunWindTwoTone;
