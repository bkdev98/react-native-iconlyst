import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesCloseOutline = ({
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
      d="M10.338 9.266a.75.75 0 0 1 1.06.001l1.152 1.156 1.151-1.155a.75.75 0 0 1 1.063 1.06l-1.155 1.158 1.158 1.161a.75.75 0 0 1-1.062 1.06l-1.155-1.159-1.15 1.154a.75.75 0 1 1-1.062-1.059l1.154-1.157-1.156-1.16a.75.75 0 0 1 .002-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.415 22.26q-.174-.002-.34-.049c-4.372-1.243-8.67-5.29-8.421-10.619a9.54 9.54 0 0 1 3.27-6.822 8.66 8.66 0 0 1 6.668-2.014 8.94 8.94 0 0 1 7.822 8c.505 5.125-3.482 8.357-7.744 8.955v1.273a1.28 1.28 0 0 1-.507 1.017 1.24 1.24 0 0 1-.748.258m.152-18.062a7.14 7.14 0 0 0-4.67 1.713 8.04 8.04 0 0 0-2.745 5.751c-.2 4.373 3.408 7.85 7.018 9.01v-1.17a1.265 1.265 0 0 1 1.119-1.25c3.5-.42 7.07-2.9 6.633-7.345a7.434 7.434 0 0 0-6.5-6.66 8 8 0 0 0-.855-.045z"
    />
  </Svg>
);
export default IconlystMessagesCloseOutline;
