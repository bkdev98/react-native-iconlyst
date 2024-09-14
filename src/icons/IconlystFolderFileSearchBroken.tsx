import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileSearchBroken = ({
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
      d="M9.07 20.987c-3.364 0-5.345-1.979-5.345-5.333V8.34c0-3.351 1.232-5.328 4.587-5.328h1.875a2.14 2.14 0 0 1 1.711.856l.856 1.138a2.15 2.15 0 0 0 1.712.856h2.653c3.364 0 4.606 1.712 4.606 5.136l-.027 1.842"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.983 14.356a2.967 2.967 0 1 1-2.332 1.132M18.002 19.496l1.493 1.49"
    />
  </Svg>
);
export default IconlystFolderFileSearchBroken;
