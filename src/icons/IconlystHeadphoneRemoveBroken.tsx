import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeadphoneRemoveBroken = ({
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
      d="m7.723 14.983-.069-.122a1.81 1.81 0 0 0-2.474-.665l-.208.121c-.544.312-.82.96-.63 1.556l.726 1.774"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.34 15.873a8.4 8.4 0 0 1-.389-2.534c0-1.63.45-3.152 1.234-4.452M16.882 5.823a8.64 8.64 0 0 0-4.28-1.134 8.6 8.6 0 0 0-5.206 1.743M9.296 17.75c.087.208.121.424.121.64 0 .623-.329 1.237-.908 1.574a1.78 1.78 0 0 1-1.548.121M3.25 19.459 18.917 3.79M16.04 17.495a1.81 1.81 0 1 0 3.135 1.809c.806-1.211 1.372-2.36 1.702-3.428.185-.6-.089-1.244-.632-1.558l-.213-.123a1.81 1.81 0 0 0-2.472.664"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.709 8.402a8.6 8.6 0 0 1 1.541 4.94c0 .846-.12 1.66-.345 2.43"
    />
  </Svg>
);
export default IconlystHeadphoneRemoveBroken;
