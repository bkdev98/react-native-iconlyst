import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOrangeSliceOutline = ({
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
      d="M17.02 4.015 4.014 17.022a.93.93 0 0 0 .153 1.424c3.998 2.754 9.519 2.354 13.076-1.198a10.27 10.27 0 0 0 1.199-13.08.93.93 0 0 0-1.424-.153m2.658-.698c-.853-1.238-2.63-1.452-3.72-.362L2.955 15.96c-1.089 1.09-.875 2.867.362 3.72 4.584 3.157 10.91 2.7 14.989-1.372v-.001c4.078-4.082 4.535-10.405 1.373-14.991"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.306 9.886a.75.75 0 0 1 .749-.717h10.944a.75.75 0 1 1 0 1.5H10.773l-.45 10.346a.75.75 0 0 1-1.498-.065z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.524 9.389a.75.75 0 0 1 1.06 0l7.79 7.779a.75.75 0 0 1-1.06 1.061l-7.79-7.78a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOrangeSliceOutline;
