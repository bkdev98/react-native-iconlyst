import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRoosterRightOutline = ({
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
      d="M12.107 4.494a1.513 1.513 0 1 0 0 3.026 1.513 1.513 0 0 0 0-3.026M9.094 6.007a3.013 3.013 0 1 1 6.026 0 3.013 3.013 0 0 1-6.026 0M12.107 12.846a.75.75 0 0 1 .75.75v6.66a.75.75 0 1 1-1.5 0v-6.66a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.107 7.52a.75.75 0 0 1 .75.75v2.746a.75.75 0 0 1-1.5 0V8.27a.75.75 0 0 1 .75-.75M22.305 13.536a.75.75 0 0 1-.75.75H5.54a.75.75 0 1 1 0-1.5h16.015a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.013 9.994a.75.75 0 0 1 1.06 0l3.012 3.012a.75.75 0 0 1 0 1.06l-3.012 3.012a.75.75 0 0 1-1.06-1.06l2.481-2.482-2.481-2.481a.75.75 0 0 1 0-1.06M3.024 11.021a.75.75 0 0 1 1.061 0l1.985 1.985a.75.75 0 0 1 0 1.06l-1.985 1.985a.75.75 0 0 1-1.06-1.06l1.454-1.455-1.455-1.454a.75.75 0 0 1 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRoosterRightOutline;
