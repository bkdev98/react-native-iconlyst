import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageLikeBroken = ({
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
      d="M20.763 11.843V7.894C20.763 5.026 18.977 3 16.107 3H7.894C5.03 3 3.237 5.026 3.237 7.894v3.87M3.236 15.633c0 2.867 1.786 4.894 4.657 4.894h1.705M6.495 6.457h-.056m2.477 0h-.055m2.476 0h-.055M17.79 9.32H3.237M14.191 14.58c-1.275.41-1.728 1.797-1.34 3.013.627 1.946 3.309 3.406 3.309 3.406s2.702-1.483 3.307-3.406c.388-1.216-.07-2.602-1.344-3.013a2.19 2.19 0 0 0-1.963.331 2.18 2.18 0 0 0-1.969-.33"
    />
  </Svg>
);
export default IconlystWebPageLikeBroken;
