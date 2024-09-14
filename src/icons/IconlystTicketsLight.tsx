import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketsLight = ({
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
      d="M6.86 12.484h4.706M9.691 8.223h1.875M2.941 8.69c0-1.894 0-2.841.357-3.57a3.5 3.5 0 0 1 1.604-1.603c.728-.357 1.675-.357 3.57-.357h7.057c1.894 0 2.842 0 3.57.357a3.5 3.5 0 0 1 1.603 1.603c.357.729.357 1.676.357 3.57v3.172c0 1.894 0 2.841-.357 3.57a3.5 3.5 0 0 1-1.603 1.603c-.729.357-1.676.357-3.57.357H8.471c-1.894 0-2.84 0-3.57-.357a3.5 3.5 0 0 1-1.603-1.603c-.357-.729-.357-1.676-.357-3.57z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.392 17.225 12.57 19.4c1.828.494 2.743.742 3.54.587a3.5 3.5 0 0 0 1.965-1.129c.328-.374.548-.863.784-1.608M15.59 8.664v3.183M15.59 3.16v2.714M15.59 14.633v2.714"
    />
  </Svg>
);
export default IconlystTicketsLight;
