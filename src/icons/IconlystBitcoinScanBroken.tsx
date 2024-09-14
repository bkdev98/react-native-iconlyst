import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinScanBroken = ({
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
      d="M10.418 12.003h2.924a2.03 2.03 0 0 0 2.02-2.229c-.101-1.056-1.048-1.83-2.108-1.83h-2.836v1.575M10.418 16.064h2.924a2.03 2.03 0 0 0 2.02-2.23c-.101-1.055-1.048-1.83-2.108-1.83h-2.836v1.64M12.531 17.26v-1.197m0-8.126V6.74M21.498 15.531v1.577A3.89 3.89 0 0 1 17.605 21h-1.289M3.5 15.531v1.577A3.89 3.89 0 0 0 7.393 21H8.65M3.5 8.469V6.892A3.89 3.89 0 0 1 7.393 3h1.289M21.5 8.469V6.892A3.89 3.89 0 0 0 17.607 3H16.35"
    />
  </Svg>
);
export default IconlystBitcoinScanBroken;
