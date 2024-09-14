import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPositionOutline = ({
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
      d="M9.296 17.292a.75.75 0 0 1 1.06 0l1.645 1.646 1.646-1.646a.75.75 0 1 1 1.06 1.061l-2.176 2.176a.75.75 0 0 1-1.06 0l-2.175-2.176a.75.75 0 0 1 0-1.06M12 3.25c.2 0 .39.08.53.22l2.176 2.176a.75.75 0 0 1-1.061 1.06L12 5.061l-1.646 1.645a.75.75 0 1 1-1.06-1.06L11.47 3.47a.75.75 0 0 1 .53-.22M6.706 9.294a.75.75 0 0 1 0 1.061L5.061 12l1.645 1.645a.75.75 0 0 1-1.06 1.06L3.47 12.532a.75.75 0 0 1 0-1.06l2.176-2.177a.75.75 0 0 1 1.06 0M17.294 9.294a.75.75 0 0 1 1.06 0l2.176 2.176a.75.75 0 0 1 0 1.06l-2.176 2.176a.75.75 0 0 1-1.06-1.061L18.939 12l-1.645-1.646a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 3.25a.75.75 0 0 1 .75.75v15.999a.75.75 0 1 1-1.5 0V4a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4 11.25h16a.75.75 0 0 1 0 1.5H4a.75.75 0 1 1 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPositionOutline;
