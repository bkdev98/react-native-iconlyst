import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongCircleDashLight = ({
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
      d="M17.561 19.088a8.96 8.96 0 0 1-4.878 1.887 9 9 0 0 1-2.645-.193"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.82 14.208a2.103 2.103 0 1 1-4.176-.503 2.103 2.103 0 0 1 4.175.503"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.85 19.362a9 9 0 0 1-3.12-3.782M3.327 9.547a9 9 0 0 0-.299 3.034M4.777 6.634A9 9 0 0 1 6.23 5.082M19.646 16.725a8.9 8.9 0 0 0 1.346-5.06 9.01 9.01 0 0 0-9.35-8.658M12.82 14.207l.756-6.266s.371 1.477 1.795 1.95"
    />
  </Svg>
);
export default IconlystSongCircleDashLight;
