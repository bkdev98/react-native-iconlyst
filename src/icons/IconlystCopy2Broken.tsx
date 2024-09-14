import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCopy2Broken = ({
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
      d="M5.794 15.289c-1.722-.214-2.773-1.568-2.773-3.406V9.164M15.285 5.748C15.031 4.108 13.85 3 12.07 3H6.295C4.285 3 3.02 4.428 3.02 6.445M20.98 17.559c0 2.016-1.256 3.44-3.275 3.44h-5.772c-2.018 0-3.273-1.424-3.273-3.44v-5.44c0-2.015 1.262-3.44 3.273-3.44h5.773c2.018 0 3.273 1.425 3.273 3.44v2.195"
    />
  </Svg>
);
export default IconlystCopy2Broken;
