import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlus3TwoTone = ({
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
      d="M20.621 15.283V8.718c0-.871-.464-1.675-1.217-2.11l-5.686-3.283a2.44 2.44 0 0 0-2.435 0L5.597 6.608a2.44 2.44 0 0 0-1.217 2.11v6.565c0 .87.464 1.673 1.217 2.108l5.686 3.283a2.43 2.43 0 0 0 2.435 0l5.686-3.283a2.44 2.44 0 0 0 1.217-2.108"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 8.944v6.113M15.558 12.002H9.439"
    />
  </Svg>
);
export default IconlystPlus3TwoTone;
