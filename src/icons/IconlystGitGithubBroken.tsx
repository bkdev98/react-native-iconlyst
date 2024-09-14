import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitGithubBroken = ({
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
      d="M21.25 12V8.026C21.25 5.081 19.415 3 16.467 3H8.032C5.092 3 3.25 5.081 3.25 8.026v7.948C3.25 18.919 5.084 21 8.032 21h8.434c2.949 0 4.784-2.081 4.784-5.026v-.353"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.25 17.47a1.645 1.645 0 1 1 0-3.29 1.645 1.645 0 0 1 0 3.29M10.25 10.356a1.645 1.645 0 1 1 0-3.29 1.645 1.645 0 0 1 0 3.29"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.452 11.81-.012-.01m1.345 2.59a1.644 1.644 0 1 1 0-3.289 1.644 1.644 0 0 1 0 3.288M8.872 7.814l-1.8-1.285M10.25 10.356v3.827M14.44 11.799l-2.897-2.07"
    />
  </Svg>
);
export default IconlystGitGithubBroken;
