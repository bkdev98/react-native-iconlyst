import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLinkBold = ({
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
      d="M20.198 4.532a5.877 5.877 0 0 0-8.208 0 1 1 0 1 0 1.39 1.437 3.89 3.89 0 0 1 5.428 0A3.87 3.87 0 0 1 20 8.708a3.87 3.87 0 0 1-1.084 2.766l-2.26 2.259a3.5 3.5 0 0 1-.415.359 3.88 3.88 0 0 1-2.89.74 3.9 3.9 0 0 1-2.576-1.528.999.999 0 1 0-1.601 1.197 5.87 5.87 0 0 0 3.895 2.31q.425.063.847.062a5.84 5.84 0 0 0 3.523-1.18q.37-.275.64-.555l2.263-2.262a5.86 5.86 0 0 0 1.657-4.202 5.85 5.85 0 0 0-1.801-4.141"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.62 18.032a3.887 3.887 0 0 1-5.428 0A3.88 3.88 0 0 1 4 15.286a3.85 3.85 0 0 1 1.086-2.76l2.237-2.247c.143-.139.298-.269.434-.378a3.92 3.92 0 0 1 5.47.79 1 1 0 0 0 1.6-1.201C12.87 6.887 9.162 6.353 6.532 8.32a9 9 0 0 0-.614.534l-2.259 2.27a5.84 5.84 0 0 0-1.659 4.195 5.86 5.86 0 0 0 1.802 4.15 5.877 5.877 0 0 0 8.208 0 1 1 0 1 0-1.39-1.438"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLinkBold;
