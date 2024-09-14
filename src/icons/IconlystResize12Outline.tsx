import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize12Outline = ({
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
      d="M5.01 14.57a.75.75 0 0 1 .748.752l-.006 2.923 2.923-.006a.75.75 0 0 1 .004 1.5l-3.677.008a.75.75 0 0 1-.752-.752l.008-3.676a.75.75 0 0 1 .752-.749M4.47 4.47a.75.75 0 0 1 .532-.22l3.677.008a.75.75 0 0 1-.004 1.5l-2.923-.006.006 2.923a.75.75 0 0 1-1.5.004L4.25 5.002c0-.2.079-.391.22-.532M18.99 14.57a.75.75 0 0 1 .751.749l.009 3.676a.75.75 0 0 1-.751.752l-3.678-.008a.75.75 0 1 1 .003-1.5l2.924.006-.007-2.923a.75.75 0 0 1 .749-.752M19.53 4.47a.75.75 0 0 1 .22.532l-.009 3.677a.75.75 0 0 1-1.5-.004l.007-2.923-2.924.006a.75.75 0 0 1-.003-1.5l3.677-.008c.2 0 .39.079.532.22"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.47 4.47a.75.75 0 0 1 1.06 0l14 13.996a.75.75 0 0 1-1.06 1.061L4.47 5.53a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.53 4.47a.75.75 0 0 1 0 1.06l-14 13.996a.75.75 0 1 1-1.06-1.06l14-13.996a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystResize12Outline;
