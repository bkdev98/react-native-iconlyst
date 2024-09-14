import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCrossingDirectionsVerticalDownOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M4.361 3.913a.75.75 0 0 1 1.06 0l7.112 7.111a.75.75 0 0 1-1.06 1.06L4.36 4.975a.75.75 0 0 1 0-1.061m9.778 9.777a.75.75 0 0 1 1.06 0l4.052 4.052v-2.63a.75.75 0 0 1 1.5 0v4.4a.75.75 0 0 1-.75.794h-4.444a.75.75 0 0 1 0-1.5h2.636L14.14 14.75a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.642 3.913a.75.75 0 0 1 0 1.06l-13.83 13.83h2.633a.75.75 0 0 1 0 1.5H4.001a.75.75 0 0 1-.75-.75V15.11a.75.75 0 0 1 1.5 0v2.634l13.83-13.83a.75.75 0 0 1 1.061 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCrossingDirectionsVerticalDownOutline;
