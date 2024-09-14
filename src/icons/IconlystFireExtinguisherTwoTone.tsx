import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFireExtinguisherTwoTone = ({
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
      d="M7.516 18.348h7.613M5.328 9.035A3.513 3.513 0 0 1 8.841 5.52h.96M12.879 5.521h2.318"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.52 11.36a3.807 3.807 0 1 1 7.613 0v8.65a1 1 0 0 1-1 1H8.52a1 1 0 0 1-1-1z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.842 7.863V4a1 1 0 0 0-1-1h-1.03a1 1 0 0 0-1 1L9.81 7.863M15.195 4.877a.8.8 0 0 1 .677-.79l2.883-.45a.8.8 0 0 1 .923.79v2.188a.8.8 0 0 1-.92.791l-2.882-.436a.8.8 0 0 1-.68-.79z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.129 12.08h-2.59a1 1 0 0 0-1 1v1.623a1 1 0 0 0 1 1h2.59"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFireExtinguisherTwoTone;
