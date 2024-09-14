import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHangoutTwoTone = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21c3.6 0 8.1-5.4 8.1-9.9S16.474 3 12 3c-4.473 0-8.1 3.6-8.1 8.1s3.627 8.1 8.1 8.1z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.95 11.548v-2.25a.9.9 0 0 0-.9-.9h-1.8a.9.9 0 0 0-.9.9v1.8a.9.9 0 0 0 .9.9h.718c.192.816-.267 1.8-.267 1.8a2.25 2.25 0 0 0 2.25-2.25M10.65 11.548v-2.25a.9.9 0 0 0-.9-.9h-1.8a.9.9 0 0 0-.9.9v1.8a.9.9 0 0 0 .9.9h.717c.192.816-.267 1.8-.267 1.8a2.25 2.25 0 0 0 2.25-2.25"
    />
  </Svg>
);
export default IconlystHangoutTwoTone;
