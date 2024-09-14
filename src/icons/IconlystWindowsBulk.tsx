import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWindowsBulk = ({
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
      d="M21.13 11.247v-6.88c0-.57-.25-1.1-.69-1.45-.44-.36-1.01-.49-1.56-.37l-7.11 1.53c.02.06.03.12.03.19v6.98zm0 1.5H11.8v6.99c0 .06-.01.13-.03.18l7.11 1.54c.13.03.26.04.39.04a1.854 1.854 0 0 0 1.86-1.86zm-10.83 6.86v-6.86H2.87v3.75c0 .88.6 1.63 1.47 1.82zM2.87 7.497v3.75h7.43v-6.85l-5.97 1.29c-.86.19-1.46.94-1.46 1.81"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M21.13 12.746v-1.5H11.8v-6.98c0-.07-.01-.13-.03-.19l-1.47.32v6.85H2.87v1.5h7.43v6.86l1.47.31c.02-.05.03-.12.03-.18v-6.99z"
    />
  </Svg>
);
export default IconlystWindowsBulk;
