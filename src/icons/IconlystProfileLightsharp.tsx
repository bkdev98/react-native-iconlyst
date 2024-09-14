import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProfileLightsharp = ({
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M12.25 14.819c3.256-.009 6.025 1.487 7.043 4.705-2.052 1.25-4.466 1.732-7.043 1.726-2.577.006-4.992-.475-7.043-1.726 1.019-3.222 3.783-4.714 7.043-4.705ZM16.67 7.17a4.42 4.42 0 1 1-8.84 0 4.42 4.42 0 0 1 8.84 0Z"
    />
  </Svg>
);
export default IconlystProfileLightsharp;
