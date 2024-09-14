import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChevronRightMDLight = ({
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
      d="M8.586 6.586a2 2 0 0 1 2.828 0l4 4a2 2 0 0 1 0 2.828l-4 4a2 2 0 1 1-2.828-2.828L11.172 12 8.586 9.414a2 2 0 0 1 0-2.828"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChevronRightMDLight;
