import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMentionTwoTone = ({
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
      d="M16.1 8.641V12.9a2.7 2.7 0 0 0 2.7 2.7c1.659 0 2.7-1.362 2.7-3.599 0-5.061-4.03-9-9.001-9S3.5 7.03 3.5 12.001 7.53 21 12.501 21a9 9 0 0 0 5.073-1.567"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 8.4a3.6 3.6 0 1 1 0 7.2 3.6 3.6 0 0 1 0-7.2"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMentionTwoTone;
