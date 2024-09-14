import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAppleHalfAltTwoTone = ({
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
      d="M3.544 12.141c.377-6.088 4.856-5.56 6.043-5.239a9.1 9.1 0 0 0 4.826 0c1.188-.32 5.667-.85 6.043 5.24.047 5.78-3.676 8.658-4.587 8.758-1.641.4-3.067-.531-3.869-.531s-2.209.869-3.868.53c-.922-.111-4.635-2.977-4.588-8.758"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.025 12.666v1.971M12.001 7.204c0-1.868-.794-3.744-3.167-4.204M12 7.363v13.006"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAppleHalfAltTwoTone;
