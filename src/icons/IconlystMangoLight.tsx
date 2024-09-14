import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMangoLight = ({
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
      d="M13.632 5.644c-2.043-.894-4.692-.538-6.556 1.1-1.173 1.031-2.338 2.694-2.338 4.986 0 1.905-.453 3.195-.986 4.018-1.311 2.025-.981 3.849 1.572 4.22 3.833.558 10.073-1.433 11.202-7.025"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.206 3.942c-.076.491-.357 1.497-.88 1.588M13.81 5.436c-.718 2.462 1.24 8.923 6.297 8.72 1.505-3.903-1.414-8.662-6.296-8.72"
    />
  </Svg>
);
export default IconlystMangoLight;
