import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAntenaCloseOutline = ({
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
      d="M20.5 4.854c0-.98-1.186-1.472-1.88-.779l-1.245 1.246a.75.75 0 0 1-1.06-1.06l1.245-1.246C19.198 1.377 22 2.537 22 4.854v14.294a2.6 2.6 0 0 1-2.6 2.6H5.103c-2.316 0-3.478-2.8-1.839-4.438m0 0 1.465-1.466a.75.75 0 0 1 1.06 1.06L4.327 18.37c-.693.693-.203 1.879.778 1.879H19.4a1.1 1.1 0 0 0 1.1-1.1V4.853M8.414 7.652a.75.75 0 0 1 1.06 0l1.71 1.71 1.71-1.71a.75.75 0 1 1 1.06 1.061l-1.71 1.71 1.71 1.709a.75.75 0 0 1-1.06 1.06l-1.71-1.709-1.71 1.71a.75.75 0 0 1-1.06-1.061l1.709-1.71-1.71-1.709a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAntenaCloseOutline;
