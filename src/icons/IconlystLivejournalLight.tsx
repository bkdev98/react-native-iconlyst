import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLivejournalLight = ({
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
      d="M18.518 6.66a8.4 8.4 0 1 1-11.88 11.879 8.4 8.4 0 0 1 11.88-11.88"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.31 14.779 3.88 8.355c-.82-.819-1.141-2.07-.569-3.077.52-.916 1.131-1.53 2.01-2.015.977-.54 2.175-.201 2.965.589l6.472 6.479a1 1 0 0 1 .261.463l.99 4.04a.988.988 0 0 1-1.195 1.195l-4.04-.99a1 1 0 0 1-.463-.26"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.203 14.607a6.66 6.66 0 0 1 4.408-4.408M15.427 12.734a6.45 6.45 0 0 0-2.493 2.726"
    />
  </Svg>
);
export default IconlystLivejournalLight;
