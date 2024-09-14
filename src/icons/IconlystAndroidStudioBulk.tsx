import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAndroidStudioBulk = ({
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
      d="M4.475 12.14a1 1 0 0 0-1.696 1.06A10.86 10.86 0 0 0 12 18.311c1.063 0 2.09-.153 3.063-.438l1.353 3.488a1 1 0 0 0 1.865-.723l-1.36-3.503a10.9 10.9 0 0 0 4.3-3.935 1 1 0 1 0-1.696-1.06A8.87 8.87 0 0 1 12 16.31a8.85 8.85 0 0 1-7.525-4.171"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 2a1 1 0 0 1 1 1v.48a4.084 4.084 0 0 1 1.433 7.237l.961 2.478a1 1 0 1 1-1.865.723l-.945-2.439a4.1 4.1 0 0 1-1.104.009l-3.829 9.874a1 1 0 1 1-1.865-.724l3.833-9.883A4.084 4.084 0 0 1 11 3.479L11.001 3a1 1 0 0 1 1-1m-.68 7.407a1 1 0 0 0-.17-.068 2.083 2.083 0 1 1 .17.068"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAndroidStudioBulk;
