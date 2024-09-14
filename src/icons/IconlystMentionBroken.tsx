import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMentionBroken = ({
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
      d="M15.6 8.641V12.9a2.7 2.7 0 0 0 2.7 2.7c1.659 0 2.7-1.362 2.7-3.599 0-5.061-4.03-9-9.001-9S3 7.03 3 12.001M17.074 19.432a9.003 9.003 0 0 1-13.326-3.834"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 8.398a3.6 3.6 0 1 1-2.726 1.25"
    />
  </Svg>
);
export default IconlystMentionBroken;
