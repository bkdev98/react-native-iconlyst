import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTransferTopOutline = ({
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
      d="M4.307 12.287a.75.75 0 0 1 .163-.817l7-7a.75.75 0 0 1 1.06 0l7 7a.75.75 0 0 1-.53 1.28h-3.25V19a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 .75-.75h2.19L12 6.06l-5.19 5.19H9a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0v-6.25H5a.75.75 0 0 1-.693-.463"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTransferTopOutline;
