import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStripeTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.27 5.983v-1.69c0-.2-.1-.398-.298-.497C15.48 3.199 13.988 3 12.397 3 8.42 3 5.734 5.088 5.734 8.57c0 5.469 7.061 4.574 7.061 6.96 0 .995-.398 1.194-1.492 1.194-1.392 0-3.182-.497-4.674-1.194-.298-.198-.596 0-.596.398v1.79"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.27 5.984v1.691c0 .398-.397.597-.695.497-1.393-.596-2.884-.895-4.177-.895-1.094 0-1.69.299-1.69 1.094 0 2.188 7.458 1.094 7.557 7.06 0 3.581-2.784 5.57-6.862 5.57a13.5 13.5 0 0 1-5.071-.995.55.55 0 0 1-.299-.497v-1.79"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStripeTwoTone;
