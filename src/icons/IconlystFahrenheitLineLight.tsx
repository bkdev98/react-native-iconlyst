import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFahrenheitLineLight = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.469 9.117a2.162 2.162 0 1 0 0-4.323 2.162 2.162 0 0 0 0 4.323M19.919 5.979h-5.96c-.53 0-.961.43-.961.961v12.265M19.919 13.151h-6.921"
    />
  </Svg>
);
export default IconlystFahrenheitLineLight;