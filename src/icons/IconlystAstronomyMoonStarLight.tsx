import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAstronomyMoonStarLight = ({
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
      d="M20.215 12.474a8.526 8.526 0 1 1-8.526-8.526"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.478 5.795a4.35 4.35 0 0 1 2.794 2.795 4.35 4.35 0 0 1 2.795-2.795A4.35 4.35 0 0 1 18.272 3a4.35 4.35 0 0 1-2.794 2.795M16.618 12.9c-.31 3.12-3.62 5.34-6.965 3.792a4.27 4.27 0 0 1-2.154-2.257c-1.383-3.394.95-6.584 4.067-6.78-.322 1.331.017 2.899.97 3.89.955.992 2.628 1.654 4.082 1.356"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAstronomyMoonStarLight;
