import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownloadBoldsharp = ({
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
      d="M11.5 8.929H13v-6.5h-1.5zM13 8.929v5.96l2.53-2.54 1.06 1.06-4.34 4.36-4.33-4.36 1.06-1.06 2.52 2.54v-5.96h-9v12.43H22V8.929z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownloadBoldsharp;
