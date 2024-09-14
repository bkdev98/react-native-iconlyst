import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAttachedTicketBroken = ({
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
      d="M11.079 6.416v.815a1.303 1.303 0 0 1-2.607 0V4.036a1.733 1.733 0 0 1 3.466 0v.25M11.938 13.404h5.5M14.768 9.771h2.671"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.191 9.915c0-1.894 0-2.841.357-3.57a3.5 3.5 0 0 1 1.603-1.603c.729-.357 1.676-.357 3.57-.357h7.058c1.894 0 2.841 0 3.57.357a3.5 3.5 0 0 1 1.603 1.603c.357.729.357 1.676.357 3.57v2.806c0 1.894 0 2.84-.357 3.57a3.5 3.5 0 0 1-1.603 1.603c-.729.357-1.676.357-3.57.357H8.721c-1.894 0-2.841 0-3.57-.357a3.5 3.5 0 0 1-1.603-1.604c-.265-.54-.333-1.201-.35-2.28"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.642 18.084 7.18 2.176c1.828.495 2.742.742 3.538.588a3.5 3.5 0 0 0 1.967-1.13c.328-.374.548-.863.783-1.607"
    />
  </Svg>
);
export default IconlystAttachedTicketBroken;
