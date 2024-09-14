import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCrossingDirectionsHorizontalRightOutline = ({
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
      d="M3.915 4.36a.75.75 0 0 1 1.06 0l7.112 7.111a.75.75 0 0 1-1.06 1.061L3.914 5.421a.75.75 0 0 1 0-1.06m9.777 9.778a.75.75 0 0 1 1.061 0l4.055 4.054v-2.636a.75.75 0 0 1 1.5 0V20a.75.75 0 0 1-.794.75h-4.4a.75.75 0 0 1 0-1.5h2.63l-4.052-4.052a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.361 4a.75.75 0 0 1 .75-.75h4.445a.75.75 0 0 1 .75.75v4.444a.75.75 0 0 1-1.5 0V5.811L4.976 19.64a.75.75 0 0 1-1.061-1.06L17.745 4.75h-2.634a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCrossingDirectionsHorizontalRightOutline;
