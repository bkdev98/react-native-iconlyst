import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCandyTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.151 12.575a6.103 6.103 0 1 1-12.206 0 6.103 6.103 0 0 1 12.206 0M12.687 10.197l-1.275 4.756M14.427 11.938l-4.756 1.275M13.79 14.316l-3.482-3.482"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.12 7.332c-.515-2.196.334-5.582 2.238-2.196 1.554-1.117 3.365-1.01 2.123 1.99 3.465 1.754 0 2.784-2.135 2.365M9.122 17.989c.515 2.196-.335 5.582-2.239 2.196-1.554 1.117-3.365 1.01-2.123-1.99-3.465-1.754 0-2.784 2.135-2.365"
    />
  </Svg>
);
export default IconlystCandyTwoTone;
