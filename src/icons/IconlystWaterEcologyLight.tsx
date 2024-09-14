import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWaterEcologyLight = ({
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
      d="M15.965 3s2.022 1.595 1.992 3.553v.002c.02 1.114-1.006 2.035-1.992 2.022-.987.013-2.014-.908-1.993-2.022v-.002C13.942 4.595 15.964 3 15.964 3M7.53 5.168S9.331 6.59 9.304 8.335v.002c.019.994-.896 1.815-1.776 1.804-.88.011-1.795-.81-1.776-1.804v-.002C5.726 6.59 7.529 5.168 7.529 5.168M10.82 16.937c.723-.105 1.458.001 2.187-.015 1.692-.041 3.018-1.471 4.306-2.441a1.65 1.65 0 0 1 2.16.154c.647.648.647 1.7 0 2.348-1.39 1.396-2.619 2.692-4.504 3.425-2.616 1.017-5.043.523-7.692 0-1.025-.203-1.97-.215-3.007-.215"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.818 16.896h1.428c1.02 0 1.844-.733 1.844-1.753 0-.847-.574-1.525-1.395-1.731-1.176-.295-2.35-.526-3.577-.498-1.946.048-3.307 1.132-4.848 2.165"
    />
  </Svg>
);
export default IconlystWaterEcologyLight;
