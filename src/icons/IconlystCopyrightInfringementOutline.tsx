import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCopyrightInfringementOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M5.106 4.856c3.807-3.808 9.981-3.808 13.788 0s3.808 9.981 0 13.788-9.98 3.808-13.788 0-3.808-9.981 0-13.788m9.848 10.908a4.752 4.752 0 0 1-6.56-6.56L5.66 6.47a8.253 8.253 0 0 0 .506 11.114 8.253 8.253 0 0 0 11.114.506zm3.386 1.266a8.253 8.253 0 0 0-.506-11.114A8.253 8.253 0 0 0 6.72 5.41l2.67 2.67a4.75 4.75 0 0 1 6.369.318.75.75 0 1 1-1.06 1.061 3.25 3.25 0 0 0-4.24-.31l4.69 4.69a.748.748 0 0 1 .826.826zm-4.485-2.366a3.252 3.252 0 0 1-4.362-4.361z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCopyrightInfringementOutline;
