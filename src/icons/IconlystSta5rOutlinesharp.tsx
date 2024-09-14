import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSta5rOutlinesharp = ({
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
      d="m12.25.589.703 1.9a14.9 14.9 0 0 0 8.807 8.808l1.901.703-1.9.703a14.9 14.9 0 0 0-8.808 8.807l-.703 1.901-.703-1.9a14.9 14.9 0 0 0-8.807-8.808L.839 12l1.9-.703a14.9 14.9 0 0 0 8.808-8.807zM4.886 12a16.4 16.4 0 0 1 7.364 7.364A16.4 16.4 0 0 1 19.614 12a16.4 16.4 0 0 1-7.364-7.364A16.4 16.4 0 0 1 4.886 12"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSta5rOutlinesharp;
