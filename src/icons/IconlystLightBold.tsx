import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLightBold = ({
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
      d="M13 4.5a1 1 0 1 0-2 0v1.96a8.616 8.616 0 0 0-7.604 8.556.5.5 0 0 0 .5.5h3.94a4.195 4.195 0 0 0 8.349 0h3.94a.5.5 0 0 0 .5-.5A8.617 8.617 0 0 0 13 6.458zM9.421 15.842a2.696 2.696 0 0 0 5.18 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M8.263 20.129a.75.75 0 0 0-1.06-1.06l-.403.402a.75.75 0 0 0 1.06 1.06zM16.843 19.068a.75.75 0 0 0-1.06 1.061l.402.402a.75.75 0 0 0 1.06-1.06zM12.76 20.931a.75.75 0 1 0-1.5 0v.569a.75.75 0 0 0 1.5 0z"
    />
  </Svg>
);
export default IconlystLightBold;
