import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWashingMachine1Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.001 21H8.214c-2.649 0-4.296-1.869-4.296-4.514V7.514C3.918 4.87 5.565 3 8.213 3h7.575c2.639 0 4.295 1.869 4.295 4.514v8.972c0 2.645-1.647 4.514-4.295 4.514h-.883M16.46 6.03h-1.923M20.081 8.482H7.31"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 11.234a3.365 3.365 0 1 0 0 6.73 3.365 3.365 0 0 0 0-6.73"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.884 14.76c.35.25.671.432 1.152.432s.801-.181 1.151-.431c.355-.25.754-.393 1.155-.432"
    />
  </Svg>
);
export default IconlystWashingMachine1Broken;
