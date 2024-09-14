import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBottleBold = ({
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
      d="M8.403 2.25a.75.75 0 1 0 0 1.5h.53v1.01c0 .426-.148.839-.42 1.166L7.15 7.566a2.83 2.83 0 0 0-.652 1.806v8.835c0 .922.288 1.75.848 2.351.565.606 1.367.942 2.31.942h4.687c.94 0 1.742-.336 2.307-.942.56-.601.85-1.429.85-2.351V9.372c0-.66-.23-1.299-.652-1.806l-1.36-1.64a1.83 1.83 0 0 1-.423-1.167V3.75h.34a.75.75 0 0 0 0-1.5z"
    />
  </Svg>
);
export default IconlystBottleBold;
