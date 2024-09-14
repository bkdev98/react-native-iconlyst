import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartLike2Light = ({
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
      d="M3.352 11.828C2.336 8.65 3.523 5.023 6.856 3.95A4.32 4.32 0 0 1 12 6.135c1.14-2.161 3.383-2.736 5.135-2.185 3.333 1.073 4.53 4.701 3.513 7.878-1.582 5.029-7.352 8.417-8.648 8.417s-7.012-3.33-8.649-8.417"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartLike2Light;
