import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHappyMoonTwoTone = ({
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
      d="M18.312 18.363c.05.002.076.064.039.1-2.815 2.722-7.196 3.374-10.744 1.326-4.304-2.485-5.771-7.986-3.291-12.281a8.98 8.98 0 0 1 9.96-4.228c.05.012.058.078.015.105a8.13 8.13 0 0 0-3.799 6.869c0 .696 2.514 1.462 2.702 2.165.216.805-1.879 1.49-1.457 2.16a8.11 8.11 0 0 0 6.575 3.784"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.902 16.046c-.369.576-1.756 1.69-3.586.626M7.396 8.25c-.183.311-.332.83-.332 1.12M18.363 6.022l-.88 1.874-1.874.88 1.873.88.88 1.874.88-1.874 1.874-.88-1.873-.88z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.39 13.887v.018"
    />
  </Svg>
);
export default IconlystHappyMoonTwoTone;
