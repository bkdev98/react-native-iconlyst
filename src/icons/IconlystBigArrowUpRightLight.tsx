import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBigArrowUpRightLight = ({
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
      d="M4.185 17.266a1.377 1.377 0 0 1 0-1.948l5.393-5.393a.53.53 0 0 0 0-.75L7.82 7.42c-.872-.872-.246-2.367.988-2.364 2.92.008 5.84-.005 8.761 0 .758.002 1.371.616 1.371 1.374.002 2.922-.005 5.845 0 8.768.003 1.231-1.488 1.854-2.359.983l-1.76-1.76a.53.53 0 0 0-.75 0L8.68 19.812a1.377 1.377 0 0 1-1.948 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBigArrowUpRightLight;
