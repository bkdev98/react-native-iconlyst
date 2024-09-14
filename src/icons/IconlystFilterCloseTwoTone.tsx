import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterCloseTwoTone = ({
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
      d="M18.597 3.857a2.684 2.684 0 0 1 2.684 2.685v1.364a3.77 3.77 0 0 1-1.246 2.801l-4.925 4.871c-.324.29-.508.706-.508 1.142v1.99c0 .63-.385 1.197-.97 1.43l-1.882.749a1.54 1.54 0 0 1-2.109-1.43v-3.224c0-.409-.162-.8-.45-1.089l-4.367-3.887A3.77 3.77 0 0 1 3.72 8.592v-2.05a2.684 2.684 0 0 1 2.684-2.685"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.699 3-4.4 4.4m4.4 0-4.4-4.4"
    />
  </Svg>
);
export default IconlystFilterCloseTwoTone;
