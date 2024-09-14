import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscordSquareLight = ({
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
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.378 11.994v.037m.15-.03a.15.15 0 1 1-.3 0 .15.15 0 0 1 .3 0M13.624 11.994v.037m.149-.03a.15.15 0 1 1-.3 0 .15.15 0 0 1 .3 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.349 7.813a9.7 9.7 0 0 0-1.994.567 1.03 1.03 0 0 0-.498.428 9.8 9.8 0 0 0-1.31 5.934c.07.7.876 1.027 1.481 1.272l.188.077c.95.404 1.404-.605 1.708-1.298a9.6 9.6 0 0 0 4.152 0c.303.693.759 1.702 1.708 1.298l.188-.077c.605-.245 1.411-.573 1.482-1.272a9.8 9.8 0 0 0-1.31-5.934 1.03 1.03 0 0 0-.499-.428 9.7 9.7 0 0 0-1.994-.568l-.508.583h-2.286z"
    />
  </Svg>
);
export default IconlystDiscordSquareLight;
