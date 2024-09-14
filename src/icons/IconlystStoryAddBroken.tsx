import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStoryAddBroken = ({
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
      d="M4.86 6.634a9 9 0 0 1 1.452-1.552M3.41 9.547a9 9 0 0 0-.299 3.034M6.934 19.36a9 9 0 0 1-3.12-3.782M17.644 19.086a8.97 8.97 0 0 1-4.878 1.889 9 9 0 0 1-2.645-.195M12.084 9.137v5.728M14.948 12H9.22M19.729 16.725a8.9 8.9 0 0 0 1.345-5.06 9 9 0 0 0-.71-3.18M18.39 5.587a8.98 8.98 0 0 0-6.665-2.58"
    />
  </Svg>
);
export default IconlystStoryAddBroken;
