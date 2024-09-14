import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageLikeTwoTone = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.263 11.843V7.894C21.263 5.026 19.476 3 16.606 3H8.393C5.531 3 3.736 5.026 3.736 7.894v7.738c0 2.868 1.786 4.895 4.657 4.895h1.705"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.995 6.456h-.056m2.477 0h-.055m2.476 0h-.055M21.263 9.32H3.736"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.691 14.581c-1.275.41-1.728 1.797-1.34 3.013C13.978 19.54 16.66 21 16.66 21s2.702-1.483 3.307-3.406c.388-1.216-.07-2.602-1.344-3.013a2.19 2.19 0 0 0-1.963.331 2.18 2.18 0 0 0-1.969-.33"
    />
  </Svg>
);
export default IconlystWebPageLikeTwoTone;
