import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleLenzLight = ({
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
      d="M6.5 9.5v-2a1 1 0 0 1 1-1h2A.5.5 0 0 0 10 6V3.5a.5.5 0 0 0-.5-.5H7a4 4 0 0 0-4 4v2.5a.5.5 0 0 0 .5.5H6a.5.5 0 0 0 .5-.5M9.5 17.5h-2a1 1 0 0 1-1-1v-2A.5.5 0 0 0 6 14H3.5a.5.5 0 0 0-.5.5V17a4 4 0 0 0 4 4h2.5a.5.5 0 0 0 .5-.5V18a.5.5 0 0 0-.5-.5M14.5 6.5h2a1 1 0 0 1 1 1v2a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 .5-.5V7a4 4 0 0 0-4-4h-2.5a.5.5 0 0 0-.5.5V6a.5.5 0 0 0 .5.5"
      clipRule="evenodd"
    />
    <Circle
      cx={12}
      cy={12}
      r={3}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Circle
      cx={18.344}
      cy={18.258}
      r={2.266}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
);
export default IconlystGoogleLenzLight;
