import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditProfileLight = ({
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
      d="M20.498 11.543q.035.39.035.79a8.666 8.666 0 0 1-8.666 8.666 8.666 8.666 0 1 1 1.08-17.264"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.137 8.76-.702.117a.788.788 0 0 1-.912-.86l.079-.724a1.7 1.7 0 0 1 .418-.94l2.764-3.044a.96.96 0 0 1 1.361-.052l.646.597c.39.362.414.971.052 1.36l-2.73 3.008a1.68 1.68 0 0 1-.976.537M14.333 12.303a2.466 2.466 0 1 1-4.932 0 2.466 2.466 0 0 1 4.932 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.607 19.883c.17-1.318 1.342-2.781 4.253-2.781 2.943 0 4.108 1.471 4.27 2.805"
    />
  </Svg>
);
export default IconlystEditProfileLight;
