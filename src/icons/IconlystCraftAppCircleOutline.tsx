import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCraftAppCircleOutline = ({
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
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.537 7.15a5.3 5.3 0 0 1 2.009-.4.75.75 0 0 1 0 1.5 3.75 3.75 0 0 0 0 7.5.75.75 0 0 1 0 1.5 5.25 5.25 0 0 1-2.01-10.1"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.296 12a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h4.5a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.546 6.75h3a2.15 2.15 0 0 1 1.595.691c.406.452.597 1.102.362 1.777a5.3 5.3 0 0 1-1.245 1.994 5.3 5.3 0 0 1-3.712 1.538.75.75 0 0 1-.75-.75V7.5a.75.75 0 0 1 .75-.75m.75 1.5v2.922a3.8 3.8 0 0 0 1.902-1.02c.398-.399.702-.89.889-1.426.037-.107.018-.194-.062-.282a.65.65 0 0 0-.48-.194z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.546 17.25h3a2.15 2.15 0 0 0 1.595-.691 1.75 1.75 0 0 0 .362-1.777 5.3 5.3 0 0 0-1.245-1.994 5.3 5.3 0 0 0-3.712-1.538.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75m.75-1.5v-2.922a3.8 3.8 0 0 1 1.902 1.02c.398.399.702.89.889 1.426.037.107.018.194-.062.282a.65.65 0 0 1-.48.194z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCraftAppCircleOutline;
