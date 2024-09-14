import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFarenheitDegreeOutline = ({
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
      d="M10.066 7.661c0-1.179.956-2.134 2.135-2.134h7.387a2.134 2.134 0 1 1 0 4.269h-5.253v2.214h4.36a2.134 2.134 0 1 1 0 4.268h-4.36v3.338a2.134 2.134 0 1 1-4.269 0zm2.135-.634a.634.634 0 0 0-.635.634v11.955a.634.634 0 1 0 1.27 0v-4.088a.75.75 0 0 1 .75-.75h5.109a.634.634 0 0 0 0-1.269h-5.11a.75.75 0 0 1-.75-.75V9.046a.75.75 0 0 1 .75-.75h6.003a.634.634 0 1 0 0-1.27zM5.903 3.75a.897.897 0 1 0 0 1.793.897.897 0 0 0 0-1.793m-2.396.897a2.397 2.397 0 1 1 4.793 0 2.397 2.397 0 0 1-4.793 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFarenheitDegreeOutline;
