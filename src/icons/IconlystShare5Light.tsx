import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShare5Light = ({
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
      d="M12.882 4.941a1.94 1.94 0 1 1-3.881 0 1.94 1.94 0 0 1 3.881 0M20.806 16.2a1.94 1.94 0 1 1-3.882 0 1.94 1.94 0 0 1 3.882 0M7.076 17.84a1.94 1.94 0 1 1-3.882 0 1.94 1.94 0 0 1 3.882 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.02 10.927a7.97 7.97 0 0 1 5.027-5.368M13.475 20.797a7.97 7.97 0 0 1-6.912-1.664M16.943 7.064a7.97 7.97 0 0 1 2.564 7.285"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.14 14.97h3.174a.86.86 0 0 0 .747-1.285l-1.577-2.769a.86.86 0 0 0-1.492-.004l-1.596 2.769a.86.86 0 0 0 .744 1.289"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShare5Light;
