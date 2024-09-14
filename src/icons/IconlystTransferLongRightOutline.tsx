import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTransferLongRightOutline = ({
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
      d="M14.064 5.314a.75.75 0 0 1 .808.13l6.631 6a.75.75 0 0 1 0 1.112l-6.631 6A.75.75 0 0 1 13.618 18v-3.25H3a.75.75 0 0 1 0-1.5h11.368a.75.75 0 0 1 .75.75v2.31L19.882 12l-4.764-4.31V10a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h10.618V6a.75.75 0 0 1 .446-.686"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTransferLongRightOutline;
