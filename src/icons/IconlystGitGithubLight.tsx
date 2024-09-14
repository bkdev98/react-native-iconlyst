import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitGithubLight = ({
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
      d="M7.783 3h8.435C19.166 3 21 5.081 21 8.026v7.948C21 18.919 19.166 21 16.217 21H7.783C4.835 21 3 18.919 3 15.974V8.026C3 5.081 4.844 3 7.783 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 17.471a1.645 1.645 0 1 1 0-3.29 1.645 1.645 0 0 1 0 3.29M10 10.354a1.645 1.645 0 1 1 0-3.29 1.645 1.645 0 0 1 0 3.29"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.202 11.81-.012-.01m1.345 2.59a1.644 1.644 0 1 1 0-3.289 1.644 1.644 0 0 1 0 3.288M8.622 7.816l-1.8-1.285M10 10.356v3.827M14.19 11.797l-2.897-2.07"
    />
  </Svg>
);
export default IconlystGitGithubLight;
