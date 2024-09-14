import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFileAiAltTwoTone = ({
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
      d="M13.473 3a2.05 2.05 0 0 1 1.48.63l3.791 3.95c.366.381.571.89.571 1.42v8.28a3.72 3.72 0 0 1-3.72 3.72h-7.19a3.72 3.72 0 0 1-3.72-3.722V6.721A3.72 3.72 0 0 1 8.405 3z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.169 13.862-.095-.257a3.54 3.54 0 0 0-2.091-2.094l-.257-.095.257-.096a3.54 3.54 0 0 0 2.09-2.094l.096-.257.095.257a3.54 3.54 0 0 0 2.09 2.094l.258.095-.257.096a3.54 3.54 0 0 0-2.091 2.094zM14.988 15.703a1.67 1.67 0 0 0-1.108-1.11c.53-.161.946-.577 1.108-1.109.161.532.576.948 1.107 1.11-.53.161-.946.577-1.107 1.109"
    />
  </Svg>
);
export default IconlystFileAiAltTwoTone;
