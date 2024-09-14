import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoice2Broken = ({
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
      d="M12 22v-3.161M16.061 6.5v-.42c0-2.253-1.818-4.08-4.06-4.08-2.245 0-4.063 1.827-4.063 4.08v4.688A4.07 4.07 0 0 0 12 14.848c2.243 0 4.061-1.826 4.061-4.08V10.3M20 10.8c0 4.44-3.582 8.038-8 8.038M4 10.8a8.04 8.04 0 0 0 5 7.454M14.069 6.756h1.99M13.07 10.094h2.99"
    />
  </Svg>
);
export default IconlystVoice2Broken;
