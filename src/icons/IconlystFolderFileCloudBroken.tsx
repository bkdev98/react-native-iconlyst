import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileCloudBroken = ({
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
      d="M14.324 20.986c-.242 0-.56-.05-.88-.18a2.18 2.18 0 0 1-1.29-1.998c.007-1.34.97-2.18 2.172-2.19 0-.864.678-2.593 2.592-2.593 1.913 0 2.591 1.729 2.591 2.592 1.2.011 2.171.818 2.171 2.191 0 .89-.527 1.656-1.287 2-.324.13-.644.178-.886.178h-.871"
    />
  </Svg>
);
export default IconlystFolderFileCloudBroken;
