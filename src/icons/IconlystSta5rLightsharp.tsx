import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSta5rLightsharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M12.25 2.75A15.66 15.66 0 0 0 21.5 12a15.66 15.66 0 0 0-9.25 9.25A15.66 15.66 0 0 0 3 12a15.66 15.66 0 0 0 9.25-9.25Z"
    />
  </Svg>
);
export default IconlystSta5rLightsharp;
