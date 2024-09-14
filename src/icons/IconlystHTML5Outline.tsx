import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHTML5Outline = ({
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
      d="M8.238 8.11a1.25 1.25 0 0 1 1.246-1.348h5.574a.75.75 0 0 1 0 1.5H9.755l.24 3.017 4.246-.01a1.25 1.25 0 0 1 1.25 1.345l-.211 2.788a1.25 1.25 0 0 1-.856 1.094l-1.99.655a1.25 1.25 0 0 1-.783 0l-1.991-.656a1.25 1.25 0 0 1-.855-1.093l-.054-.71a.75.75 0 0 1 1.496-.113l.04.543 1.755.579 1.755-.578.177-2.353-4.208.01a1.25 1.25 0 0 1-1.248-1.152z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHTML5Outline;
