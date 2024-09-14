import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTouchIdCircle2Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 12.959a9.75 9.75 0 0 1 9.75-9.75 9.75 9.75 0 0 1 9.75 9.75 9.75 9.75 0 0 1-9.75 9.75 9.75 9.75 0 0 1-9.75-9.75m9.75-8.25A8.25 8.25 0 0 0 4 12.959a8.25 8.25 0 0 0 8.25 8.25 8.25 8.25 0 0 0 8.25-8.25 8.25 8.25 0 0 0-8.25-8.25"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.68 13.191a2.533 2.533 0 1 1 5.065 0v4.223a.75.75 0 0 1-1.5 0v-4.223a1.032 1.032 0 1 0-2.065 0v.477a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.43 15.06a.75.75 0 0 1 .75.75v1.605a.75.75 0 0 1-1.5 0V15.81a.75.75 0 0 1 .75-.75M12.25 9.252a3.77 3.77 0 0 0-3.283 1.912.75.75 0 1 1-1.304-.742 5.27 5.27 0 0 1 4.588-2.67c.718 0 1.406.143 2.033.405a.75.75 0 0 1-.577 1.384 3.8 3.8 0 0 0-1.456-.289M15.519 9.807a.75.75 0 0 1 1.045.18c.606.86.963 1.91.963 3.04v3.36a.75.75 0 1 1-1.5 0v-3.36c0-.81-.255-1.56-.689-2.175a.75.75 0 0 1 .18-1.045M7.727 12.838a.75.75 0 0 1 .75.75v2.803a.75.75 0 0 1-1.5 0v-2.803a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTouchIdCircle2Outline;
