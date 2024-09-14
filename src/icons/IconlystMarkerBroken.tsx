import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMarkerBroken = ({
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
      d="M12.455 21h5.822M7.002 17.945c1.296-3.822-1.277-5.329-1.277-5.329l5.725-8.904a1.486 1.486 0 0 1 1.85-.594l3.099 1.315c.679.288 1.044 1.03.857 1.744l-.685 2.542M9.984 19.21c1.847-3.59 4.53-2.866 4.53-2.866l1.128-4.18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 17.945 5.907 21h3.405l.672-1.79"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.21 14.52 4.304 1.825"
    />
  </Svg>
);
export default IconlystMarkerBroken;
