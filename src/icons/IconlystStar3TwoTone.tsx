import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStar3TwoTone = ({
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
      d="M20.621 8.718v6.565c0 .87-.464 1.673-1.217 2.108l-5.686 3.283a2.43 2.43 0 0 1-2.435 0L5.597 17.39a2.44 2.44 0 0 1-1.217-2.108V8.718c0-.871.464-1.675 1.217-2.11l5.686-3.283a2.44 2.44 0 0 1 2.435 0l5.686 3.283a2.44 2.44 0 0 1 1.217 2.11"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 8.953v6.095M9.895 10.418l5.209 3.165M15.104 10.418l-5.21 3.165"
    />
  </Svg>
);
export default IconlystStar3TwoTone;
