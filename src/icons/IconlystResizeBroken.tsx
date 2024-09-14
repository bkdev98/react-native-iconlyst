import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResizeBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.59 9.017c-.866 0-1.57.704-1.57 1.572v2.818c0 .868.704 1.571 1.57 1.571h2.818c.869 0 1.573-.703 1.573-1.571v-2.818c0-.868-.704-1.572-1.573-1.572M21 3.002l-3.936 3.936M16.935 3.011l4.064-.01-.01 4.065M21 20.997l-3.936-3.936M16.935 20.99l4.064.009-.01-4.064M3 3.002l3.936 3.936M7.064 3.011 3 3.001l.009 4.065M3 20.997l3.936-3.936M7.064 20.99 3 20.999l.009-4.064"
    />
  </Svg>
);
export default IconlystResizeBroken;
