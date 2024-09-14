import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTouchIdCircleOutline = ({
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
      d="M12.251 9.225a2.423 2.423 0 0 0-2.423 2.423v2.619a2.423 2.423 0 0 0 3.729 2.041.75.75 0 1 1 .809 1.263 3.923 3.923 0 0 1-6.038-3.305v-2.618a3.923 3.923 0 0 1 7.846 0v2.619a.75.75 0 0 1-1.5 0v-2.62a2.423 2.423 0 0 0-2.423-2.422"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 11.096a.75.75 0 0 1 .75.75v2.367a.75.75 0 0 1-1.5 0v-2.367a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTouchIdCircleOutline;
