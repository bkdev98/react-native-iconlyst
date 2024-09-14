import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst3DVideoBroken = ({
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
      d="M12.083 21H16.3c2.949 0 4.784-2.081 4.784-5.026V8.026C21.084 5.081 19.249 3 16.301 3H7.866c-2.94 0-4.782 2.081-4.782 5.026v7.948C3.084 18.919 4.918 21 7.866 21h.866"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.907 13.99a1.5 1.5 0 1 0 1.062-2.56l1.505-1.864H7.855"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.88 14.431h-.81V9.566h.81a2.433 2.433 0 0 1 0 4.865"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst3DVideoBroken;
