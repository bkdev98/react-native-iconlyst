import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst360Light = ({
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
      d="M2.082 16.232a2.359 2.359 0 1 0 1.67-4.026l2.366-2.933H2M8.843 13.187l3.11-3.914"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.055 14.496a2.309 2.309 0 1 0-4.618 0 2.309 2.309 0 0 0 4.618 0M17.76 16.803a2.06 2.06 0 0 1-2.06-2.059v-3.41a2.06 2.06 0 1 1 4.118 0v3.41a2.06 2.06 0 0 1-2.059 2.06"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.451 7.605h.042"
    />
  </Svg>
);
export default Iconlyst360Light;
