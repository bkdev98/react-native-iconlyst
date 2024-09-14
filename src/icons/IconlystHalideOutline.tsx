import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHalideOutline = ({
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
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.884 8.995a1.25 1.25 0 0 0-1.768 0l-2.121 2.12a1.25 1.25 0 0 0 0 1.768l2.12 2.121a1.25 1.25 0 0 0 1.768 0l2.121-2.12a1.25 1.25 0 0 0 0-1.768zm-2.829-1.06a2.75 2.75 0 0 1 3.89 0l2.12 2.12a2.75 2.75 0 0 1 0 3.89l-2.12 2.12a2.75 2.75 0 0 1-3.89 0l-2.12-2.12a2.75 2.75 0 0 1 0-3.89z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.931 3.118a.75.75 0 0 1 0 1.06l-7.01 7.011a.75.75 0 1 1-1.06-1.06l7.01-7.01a.75.75 0 0 1 1.06 0M16.14 12.81a.75.75 0 0 1 0 1.06l-7.008 7.008a.75.75 0 0 1-1.06-1.06l7.007-7.009a.75.75 0 0 1 1.06 0M3.122 8.067a.75.75 0 0 1 1.06 0l7.011 7.01a.75.75 0 0 1-1.06 1.061l-7.011-7.01a.75.75 0 0 1 0-1.06M12.812 7.86a.75.75 0 0 1 1.061 0l7.008 7.008a.75.75 0 1 1-1.06 1.06l-7.009-7.007a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHalideOutline;
