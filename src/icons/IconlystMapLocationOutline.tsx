import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMapLocationOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M15.889 4.836a.75.75 0 0 1 .75.75v3.462a.75.75 0 0 1-1.5 0V5.586a.75.75 0 0 1 .75-.75M17.646 12.832a2.854 2.854 0 0 0-2.854 2.855c0 1.008.612 2.088 1.396 2.972.382.429.776.78 1.097 1.018.147.108.27.186.36.236q.14-.075.361-.236a7.5 7.5 0 0 0 1.098-1.018c.784-.884 1.396-1.964 1.396-2.972a2.854 2.854 0 0 0-2.854-2.855m-4.354 2.854a4.354 4.354 0 1 1 8.708 0c0 1.558-.902 2.986-1.775 3.969a9 9 0 0 1-1.327 1.228c-.203.15-.402.279-.584.374-.147.076-.398.196-.668.196s-.522-.12-.668-.196a4.6 4.6 0 0 1-.585-.374 9 9 0 0 1-1.326-1.228c-.873-.983-1.775-2.411-1.775-3.968"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.646 14.656a1 1 0 0 1 1 1v.117a1 1 0 1 1-2 0v-.117a1 1 0 0 1 1-1M8.537 4.114 4.683 5.827A1.15 1.15 0 0 0 4 6.877v12.54c0 .207.211.343.398.26l3.53-1.566a2.25 2.25 0 0 1 1.676-.06l.002.002 2.143.78a.75.75 0 0 1-.514 1.41l-2.14-.78h-.001a.75.75 0 0 0-.557.019m0 0-3.53 1.566a1.783 1.783 0 0 1-2.507-1.63V6.878a2.65 2.65 0 0 1 1.574-2.422l3.854-1.712a2.24 2.24 0 0 1 1.677-.058l5.631 2.046a.75.75 0 0 0 .558-.02l3.522-1.565.001-.001a1.782 1.782 0 0 1 2.511 1.63V9.37a.75.75 0 0 1-1.5 0V4.776a.282.282 0 0 0-.397-.261l-.003.001-3.525 1.568a2.25 2.25 0 0 1-1.677.058L9.093 4.096a.74.74 0 0 0-.556.018"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.784 2.566a.75.75 0 0 1 .75.75v15.352a.75.75 0 1 1-1.5 0V3.316a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMapLocationOutline;
