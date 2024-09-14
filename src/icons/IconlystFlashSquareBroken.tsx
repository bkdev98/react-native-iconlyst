import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashSquareBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.354 21.137c-2.948 0-4.782-2.082-4.782-5.027V8.163c0-2.945 1.843-5.026 4.782-5.026h8.435c2.948 0 4.783 2.08 4.783 5.026v7.947c0 2.945-1.835 5.027-4.784 5.027h-4.217"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.39 7.91h2.425c.194 0 .33.192.266.375l-1.073 2.518a.28.28 0 0 0 .265.374h2.29c.242 0 .371.285.212.467l-4.35 4.964c-.195.224-.559.03-.482-.258l.829-3.109a.28.28 0 0 0-.272-.353H9.58a.28.28 0 0 1-.264-.378l.905-2.208"
    />
  </Svg>
);
export default IconlystFlashSquareBroken;
