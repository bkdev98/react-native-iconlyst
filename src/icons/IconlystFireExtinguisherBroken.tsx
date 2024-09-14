import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFireExtinguisherBroken = ({
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
      d="M7.016 18.348h5.3M4.828 9.035A3.513 3.513 0 0 1 8.341 5.52h.96M12.379 5.521h2.318M14.633 20.01v-8.65a3.807 3.807 0 1 0-7.613 0v8.65a1 1 0 0 0 1 1h5.613a1 1 0 0 0 1-1"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.342 7.863V4a1 1 0 0 0-1-1h-1.03a1 1 0 0 0-1 1L9.31 7.863M18.255 3.637a.8.8 0 0 1 .923.79v2.188a.8.8 0 0 1-.92.791l-2.882-.436a.8.8 0 0 1-.68-.79V4.876a.8.8 0 0 1 .676-.79M12.504 12.08h-.465a1 1 0 0 0-1 1v1.623a1 1 0 0 0 1 1h2.59"
    />
  </Svg>
);
export default IconlystFireExtinguisherBroken;
