import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldFailBoldsharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.223 13.613-1.06 1.061-1.928-1.927-1.927 1.927-1.06-1.061 1.927-1.927-1.927-1.927 1.06-1.061 1.927 1.927 1.927-1.927 1.061 1.061-1.927 1.927zM3.883 3.093v9.55c0 6.86 8.14 9.404 8.222 9.428l.145.044.145-.044c.082-.024 8.223-2.568 8.223-9.428v-9.55z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShieldFailBoldsharp;
