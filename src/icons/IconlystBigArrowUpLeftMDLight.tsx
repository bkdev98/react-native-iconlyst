import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBigArrowUpLeftMDLight = ({
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
      d="M5 7a2 2 0 0 1 2-2h8a2 2 0 1 1 0 4h-3.172l6.586 6.586a2 2 0 1 1-2.828 2.828L9 11.828V15a2 2 0 1 1-4 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBigArrowUpLeftMDLight;
