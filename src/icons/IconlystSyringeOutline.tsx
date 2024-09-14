import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSyringeOutline = ({
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
      d="M13.071 6.067c-.434.016-.917.218-1.369.67L6.95 11.49a4.11 4.11 0 0 0 5.812 5.812l4.753-4.753c.453-.453.655-.935.67-1.369.016-.425-.146-.884-.577-1.316l-3.22-3.22c-.43-.43-.89-.592-1.316-.577m-.052-1.499c.884-.03 1.735.323 2.428 1.015l3.22 3.22c.694.695 1.048 1.546 1.017 2.43-.032.877-.438 1.705-1.11 2.377l-4.753 4.753a5.61 5.61 0 0 1-7.933-7.933l4.754-4.753c.672-.673 1.5-1.078 2.377-1.109"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.95 17.302a.75.75 0 0 1 0 1.06l-3.17 3.169a.75.75 0 0 1-1.06-1.061l3.169-3.168a.75.75 0 0 1 1.06 0M17.034 2.47a.75.75 0 0 1 1.06 0l3.685 3.684a.75.75 0 0 1-1.06 1.061L17.034 3.53a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.939 4.313a.75.75 0 0 1 0 1.061l-2.881 2.881a.75.75 0 0 1-1.061-1.06l2.881-2.882a.75.75 0 0 1 1.06 0M11.896 14.282a.75.75 0 0 1 1.06 0l1.942 1.942a.75.75 0 0 1-1.06 1.06l-1.942-1.941a.75.75 0 0 1 0-1.06M13.286 10.993a.75.75 0 0 1 1.06 0l2.893 2.893a.75.75 0 1 1-1.06 1.06l-2.893-2.892a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSyringeOutline;
