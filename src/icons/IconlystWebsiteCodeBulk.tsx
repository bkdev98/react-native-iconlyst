import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebsiteCodeBulk = ({
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
      d="M2.8 8.68a.3.3 0 0 0-.3.3v6.994c0 3.305 2.123 5.526 5.283 5.526h8.434c3.16 0 5.283-2.221 5.283-5.526V8.98a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.092 7.18a.29.29 0 0 0 .29-.335C20.932 4.208 18.98 2.5 16.217 2.5H7.783c-2.763 0-4.715 1.708-5.165 4.345a.29.29 0 0 0 .29.335zM16.742 14.8l-2.368 2.368a.746.746 0 0 1-1.06 0 .75.75 0 0 1 0-1.06l1.837-1.838-1.838-1.839a.75.75 0 1 1 1.061-1.06l2.368 2.368a.75.75 0 0 1 0 1.061m-6.055 1.308a.749.749 0 1 1-1.06 1.06L7.26 14.8a.75.75 0 0 1 0-1.06l2.368-2.37a.75.75 0 1 1 1.06 1.061l-1.838 1.84z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebsiteCodeBulk;
