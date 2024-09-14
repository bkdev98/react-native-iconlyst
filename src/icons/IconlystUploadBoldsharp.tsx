import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUploadBoldsharp = ({
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
      d="m13 4.314 2.528 2.536 1.063-1.059-4.342-4.354L7.92 5.793 8.983 6.85 11.5 4.318v6.201H13zM13 10.519v6.26h-1.5v-6.26h-9v11.52H22v-11.52z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUploadBoldsharp;
