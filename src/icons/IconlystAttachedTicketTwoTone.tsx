import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAttachedTicketTwoTone = ({
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
      d="M11.329 6.414v.815a1.303 1.303 0 1 1-2.607 0V4.034a1.733 1.733 0 1 1 3.466 0v.25"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.189 13.402h5.5M15.018 9.773h2.67"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.441 9.917c0-1.894 0-2.841.357-3.57a3.5 3.5 0 0 1 1.604-1.603c.728-.357 1.675-.357 3.57-.357h7.057c1.894 0 2.842 0 3.57.357a3.5 3.5 0 0 1 1.603 1.603c.357.729.357 1.676.357 3.57v2.806c0 1.894 0 2.84-.357 3.57a3.5 3.5 0 0 1-1.603 1.603c-.729.357-1.676.357-3.57.357H8.971c-1.894 0-2.84 0-3.57-.357a3.5 3.5 0 0 1-1.603-1.604c-.357-.728-.357-1.675-.357-3.57z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.892 18.084 7.179 2.176c1.828.495 2.743.742 3.54.588a3.5 3.5 0 0 0 1.965-1.13c.328-.374.548-.863.784-1.607"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAttachedTicketTwoTone;
