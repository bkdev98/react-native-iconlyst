import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperRefresh2TwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.912 18.733H6.689c-1.966 0-3.189-1.387-3.189-3.35v-7.4c0-1.963 1.223-3.35 3.188-3.35h11.624c1.96 0 3.188 1.387 3.188 3.35v2"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.713 8.133h1.403"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.21 11.682a2.287 2.287 0 1 1 4.576 0 2.287 2.287 0 0 1-4.575 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.938 17.893h-1.721v1.6M21.5 13.684v1.72h-1.72"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.122 18.055a2.79 2.79 0 0 1-2.418 1.394c-1.54 0-2.487-1.549-2.487-1.549M16.277 15.27a2.78 2.78 0 0 1 2.427-1.403c1.867 0 2.796 1.548 2.796 1.548"
    />
  </Svg>
);
export default IconlystMoneyPaperRefresh2TwoTone;
