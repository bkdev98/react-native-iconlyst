import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTruckTimeClockLight = ({
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
      d="m5.136 18.184-.057.001A2.08 2.08 0 0 1 3 16.105v-3.063"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.97 18.184a1.917 1.917 0 1 0-3.833 0 1.917 1.917 0 0 0 3.833 0M18.113 18.184a1.917 1.917 0 1 0-3.834 0 1.917 1.917 0 0 0 3.834 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.969 18.185h5.31M16.197 16.267V7.981a2.08 2.08 0 0 0-2.08-2.08h-1.084M18.113 18.184h.808A2.08 2.08 0 0 0 21 16.105v-3.443c0-.936-.553-1.784-1.41-2.162l-3.393-1.498M18.598 13.412h2.4M6.86 11.618a3.86 3.86 0 1 0 0-7.72 3.86 3.86 0 0 0 0 7.72"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.058 8.762-1.22-.73V6.464"
    />
  </Svg>
);
export default IconlystTruckTimeClockLight;
