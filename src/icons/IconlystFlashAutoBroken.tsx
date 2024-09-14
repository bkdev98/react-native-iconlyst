import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashAutoBroken = ({
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
      d="M16.528 18.71h3.5M21 20.792l-2.724-5.826-2.723 5.826M7.808 5.715 9.35 3.589c.523-.72 1.66-.35 1.66.539v5.34h5.051c.75 0 1.183.85.743 1.456l-2.51 3.457M12.174 17.304l-1.543 2.126c-.523.72-1.66.35-1.66-.539v-5.34H3.919a.917.917 0 0 1-.742-1.456L5.424 9"
    />
  </Svg>
);
export default IconlystFlashAutoBroken;
