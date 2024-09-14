import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlowDownOutline = ({
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
      d="M12 11.25a.75.75 0 0 1 .75.75v7.19l2.72-2.72a.75.75 0 0 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V12a.75.75 0 0 1 .75-.75M12 8.25a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75M12 5.25a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75M12 2.25a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlowDownOutline;
