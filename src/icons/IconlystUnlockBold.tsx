import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUnlockBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M11.979 2c2.367 0 4.46 1.462 5.232 3.628a.84.84 0 0 1-.04.666.85.85 0 0 1-.509.438.906.906 0 0 1-1.138-.537c-.518-1.472-1.94-2.456-3.525-2.456-2.074 0-3.75 1.631-3.76 3.628V8.71l-.013.002h8.005c2.358 0 4.269 1.87 4.269 4.176v4.937C20.5 20.13 18.589 22 16.231 22H7.768C5.41 22 3.5 20.13 3.5 17.824v-4.937c0-1.897 1.3-3.48 3.07-3.99l-.11.014V7.387C6.48 4.417 8.95 2 11.979 2m.016 11.383a.875.875 0 0 0-.884.864v2.207c0 .487.396.874.884.874a.88.88 0 0 0 .894-.874v-2.207a.88.88 0 0 0-.894-.864"
    />
  </Svg>
);
export default IconlystUnlockBold;
