import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPodcastBold = ({
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
      d="m17.733 12.332-.054.002a.75.75 0 0 1-.747-.697 4.93 4.93 0 0 0-1.425-3.134 4.88 4.88 0 0 0-3.147-1.437.75.75 0 0 1-.694-.802.76.76 0 0 1 .801-.694 6.427 6.427 0 0 1 5.961 5.961.75.75 0 0 1-.695.801m-5.734 2.554a2.89 2.89 0 0 1-2.886-2.887 2.89 2.89 0 0 1 2.886-2.886 2.89 2.89 0 0 1 2.887 2.886 2.89 2.89 0 0 1-2.887 2.887M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.999 10.613c-.764 0-1.386.622-1.386 1.386 0 .765.622 1.387 1.386 1.387.765 0 1.387-.622 1.387-1.387 0-.764-.622-1.386-1.387-1.386"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPodcastBold;
