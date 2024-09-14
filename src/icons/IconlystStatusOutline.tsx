import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStatusOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.5 12c0-5.385 4.365-9.75 9.75-9.75S22 6.615 22 12s-4.365 9.75-9.75 9.75S2.5 17.385 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.324 7.563c.709.492 1.247 1.257 1.301 2.224.053.923-.294 1.73-.966 2.303-.651.555-1.552.847-2.564.903l-.01.001a11 11 0 0 1-1.891-.08 9.4 9.4 0 0 0-1.618-.07 5 5 0 0 0-.851.12.75.75 0 0 1-.916-.792c.219-2.674 2.2-5.132 5.026-5.289.89-.05 1.788.194 2.49.68m-.855 1.233a2.52 2.52 0 0 0-1.55-.415c-1.623.09-2.96 1.323-3.44 2.966l.02-.001h.007a11 11 0 0 1 1.893.08q.804.105 1.616.07c.793-.046 1.342-.267 1.67-.547.308-.263.47-.613.443-1.077-.024-.42-.253-.795-.659-1.076"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.616 11.444a.75.75 0 0 1 .683.811c-.214 2.501-2.111 4.72-4.79 4.867h-.002c-.841.043-1.694-.182-2.364-.632-.676-.455-1.204-1.171-1.258-2.09-.05-.835.218-1.527.731-2.035.49-.484 1.147-.743 1.795-.869a.75.75 0 0 1 .285 1.473c-.477.092-.818.259-1.026.463-.183.182-.314.442-.288.879.02.352.22.68.598.934.383.258.91.406 1.448.379 1.822-.101 3.216-1.625 3.377-3.497a.75.75 0 0 1 .811-.683"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStatusOutline;
