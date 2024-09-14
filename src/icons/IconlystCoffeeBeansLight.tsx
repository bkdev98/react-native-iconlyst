import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoffeeBeansLight = ({
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
      d="M9.211 19.789c2.086 2.086 6.146 1.41 9.067-1.511 2.92-2.921 3.597-6.98 1.51-9.067M9.212 19.79c-2.086-2.087-1.41-6.146 1.511-9.067 2.921-2.92 6.98-3.597 9.067-1.51M9.21 19.788c1.511-.504 4.372-.917 5.667-5.667.907-3.324 3.652-4.659 4.91-4.91"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.496 8.306a9.2 9.2 0 0 0-1.922-2.77c-2.72-2.721-6.502-3.351-8.446-1.408s-1.313 5.725 1.408 8.446a9.2 9.2 0 0 0 2.725 1.902"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.128 4.128c1.173.235 3.73 1.478 4.575 4.575.33 1.213.77 2.122 1.264 2.813"
    />
  </Svg>
);
export default IconlystCoffeeBeansLight;
