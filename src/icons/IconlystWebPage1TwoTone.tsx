import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPage1TwoTone = ({
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
      d="M8.283 3h8.434C19.665 3 21.5 5.082 21.5 8.027v7.946C21.5 18.92 19.665 21 16.716 21H8.283C5.335 21 3.5 18.919 3.5 15.973V8.027C3.5 5.082 5.344 3 8.283 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.845 6.55h-.056m2.541 0h-.055m2.541 0h-.055M21.5 9.492h-18"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWebPage1TwoTone;
