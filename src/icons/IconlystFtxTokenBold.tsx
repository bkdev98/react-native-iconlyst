import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFtxTokenBold = ({
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
      d="M12 16.005H7.5a.5.5 0 0 0-.5.5v4.5a.5.5 0 0 0 .5.5H12a.5.5 0 0 0 .5-.5v-4.5a.5.5 0 0 0-.5-.5M21 2.505H8.4a.5.5 0 0 0-.5.5v4.5a.5.5 0 0 0 .5.5H21a.5.5 0 0 0 .5-.5v-4.5a.5.5 0 0 0-.5-.5M17.4 9.345h-6.703a.5.5 0 0 0-.5.5v4.229a.5.5 0 0 0 .5.5H17.4a.5.5 0 0 0 .5-.5v-4.23a.5.5 0 0 0-.5-.5M8 14.255v-4.5a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v4.5a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFtxTokenBold;
