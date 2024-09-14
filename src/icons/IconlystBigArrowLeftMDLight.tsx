import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBigArrowLeftMDLight = ({
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
      d="M11.586 4.586a2 2 0 0 1 2.828 0l6 6a2 2 0 0 1 0 2.828l-6 6a2 2 0 1 1-2.828-2.828L14.172 14H5a2 2 0 1 1 0-4h9.172l-2.586-2.586a2 2 0 0 1 0-2.828"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBigArrowLeftMDLight;
