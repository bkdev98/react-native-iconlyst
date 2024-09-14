import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCopyrightBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 12a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M9.702 14.306a3.25 3.25 0 1 1 4.596-4.596.75.75 0 0 0 1.06-1.06 4.75 4.75 0 1 0 0 6.717.75.75 0 0 0-1.06-1.061 3.25 3.25 0 0 1-4.596 0"
    />
  </Svg>
);
export default IconlystCopyrightBulk;
