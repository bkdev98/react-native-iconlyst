import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStoryAddLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.61 6.634A9 9 0 0 1 7.06 5.082M4.159 9.547a9 9 0 0 0-.299 3.034M7.684 19.36a9 9 0 0 1-3.12-3.782M18.394 19.086a8.97 8.97 0 0 1-4.878 1.889 9 9 0 0 1-2.645-.195M12.833 9.137v5.728M15.697 12H9.969M20.478 16.724a8.9 8.9 0 0 0 1.346-5.06 9.01 9.01 0 0 0-9.35-8.657"
    />
  </Svg>
);
export default IconlystStoryAddLight;
