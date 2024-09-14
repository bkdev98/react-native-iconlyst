import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageEyeHideTwoTone = ({
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
      d="M8.101 3h8.434c2.948 0 4.782 2.082 4.782 5.027v7.946c0 2.946-1.834 5.027-4.782 5.027H8.1c-2.948 0-4.783-2.081-4.783-5.027V8.027C3.318 5.082 5.162 3 8.101 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.19 13.44c.665 1.548 1.846 2.477 3.138 2.477 1.29 0 2.471-.93 3.137-2.476M12.328 15.917v1.397m-2.23-2.438-.987.987m5.426-.987.988.987"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.663 6.55h-.056m2.542 0h-.055m2.54 0h-.055M21.317 9.492H3.318"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWebPageEyeHideTwoTone;
