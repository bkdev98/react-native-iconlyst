import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystYenCircleBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 2.563c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.261-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m13.558 11.223 1.744-2.183a.75.75 0 1 0-1.172-.936L12 10.77 9.87 8.104a.75.75 0 0 0-1.172.936l1.743 2.183h-.818a.75.75 0 0 0 0 1.5h1.627v3.33a.75.75 0 0 0 1.5 0v-3.33h1.628a.75.75 0 0 0 0-1.5z"
    />
  </Svg>
);
export default IconlystYenCircleBulk;
