import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBigArrowDownRightMDLight = ({
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
      d="M5.586 5.586a2 2 0 0 1 2.828 0L15 12.172V9a2 2 0 1 1 4 0v8a2 2 0 0 1-2 2H9a2 2 0 1 1 0-4h3.172L5.586 8.414a2 2 0 0 1 0-2.828"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBigArrowDownRightMDLight;
