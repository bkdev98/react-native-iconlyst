import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCSS3Outline = ({
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
      fillRule="evenodd"
      d="M6.074 3.75c-.75 0-1.335.646-1.262 1.391l1.18 12.046c.046.47.35.875.787 1.051l4.746 1.92c.305.123.645.123.95 0l4.746-1.92c.438-.176.74-.582.787-1.051l1.18-12.046a1.27 1.27 0 0 0-1.262-1.391zM3.319 5.288A2.77 2.77 0 0 1 6.074 2.25h11.852a2.77 2.77 0 0 1 2.755 3.038L19.5 17.333a2.77 2.77 0 0 1-1.718 2.296l-4.746 1.92c-.665.268-1.41.268-2.075 0l-4.746-1.92A2.77 2.77 0 0 1 4.5 17.333z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.635 7.438a.75.75 0 0 1 .75-.75h7.23a.75.75 0 0 1 .747.813l-.714 8.347a.75.75 0 0 1-.556.661l-2.948.776a.75.75 0 0 1-.386-.001l-2.885-.776a.75.75 0 0 1-.547-.61l-.186-1.21a.75.75 0 0 1 1.483-.228l.111.727 2.221.597 2.243-.59.6-7.007H8.385a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.775 11.844a.75.75 0 0 1 .75-.75h4.438a.75.75 0 1 1 0 1.5h-4.438a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCSS3Outline;
