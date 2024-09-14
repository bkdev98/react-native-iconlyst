import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRainOutline = ({
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
      d="M10.007 7.633a.75.75 0 0 1 1.06 0l10.764 10.764a.75.75 0 1 1-1.06 1.06L10.007 8.693a.75.75 0 0 1 0-1.06M3.477 6.24a.75.75 0 0 1 1.06 0l10.764 10.763a.75.75 0 0 1-1.06 1.06L3.476 7.3a.75.75 0 0 1 0-1.06M10.32 3.466a.75.75 0 0 1 1.06 0l5.383 5.382a.75.75 0 1 1-1.061 1.06L10.32 4.526a.75.75 0 0 1 0-1.06m8.073 8.073a.75.75 0 0 1 1.06 0l2.692 2.69a.75.75 0 1 1-1.061 1.061l-2.691-2.69a.75.75 0 0 1 0-1.061M15.389 3.913a.75.75 0 0 1 1.06 0l4.377 4.377a.75.75 0 1 1-1.06 1.06l-4.377-4.376a.75.75 0 0 1 0-1.061M3.084 10.354a.75.75 0 0 1 1.06 0l4.378 4.377a.75.75 0 1 1-1.061 1.061l-4.377-4.377a.75.75 0 0 1 0-1.06M10.007 17.1a.75.75 0 0 1 1.06 0l2.595 2.594a.75.75 0 0 1-1.06 1.06l-2.595-2.594a.75.75 0 0 1 0-1.06M19.099 3.246a.75.75 0 0 1 1.06 0l1.335 1.335a.75.75 0 0 1-1.06 1.06l-1.335-1.335a.75.75 0 0 1 0-1.06M4.604 16.335a.75.75 0 0 1 1.061 0L7 17.67a.75.75 0 1 1-1.06 1.061l-1.336-1.335a.75.75 0 0 1 0-1.06M5.685 3.466a.75.75 0 0 1 1.06 0L8.082 4.8a.75.75 0 1 1-1.06 1.06L5.684 4.527a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRainOutline;
