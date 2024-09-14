import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTransferLongLeftOutline = ({
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
      d="M9.936 5.314a.75.75 0 0 0-.808.13l-6.631 6a.75.75 0 0 0 0 1.112l6.631 6A.75.75 0 0 0 10.382 18v-3.25H21a.75.75 0 0 0 0-1.5H9.632a.75.75 0 0 0-.75.75v2.31L4.118 12l4.764-4.31V10c0 .414.335.75.75.75H21a.75.75 0 0 0 0-1.5H10.382V6a.75.75 0 0 0-.446-.686"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTransferLongLeftOutline;
