import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVimeoLight = ({
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
      d="M19.311 4.635c.846.243 1.38.958 1.585 1.785 1.14 4.468-7.38 17.417-11.165 11.668-1.284-1.95-1.821-5.034-2.707-7.56-.536-1.49-1.58-1.48-2.74-.647-.23.178-.555.272-.768-.002-.126-.16-.287-.554-.412-.715a.494.494 0 0 1 .11-.708c1.089-.95 1.892-1.778 3.062-2.63 2.24-1.58 4.324-1.314 4.866 1.018.168.72.986 8.396 2.374 6.932.827-1.047 1.58-2.063 2.184-3.249.634-1.359-.123-2.33-1.638-1.944-.308.083-.55-.242-.427-.52.28-.766.668-1.504 1.214-2.115 1.065-1.212 2.901-1.788 4.462-1.313"
    />
  </Svg>
);
export default IconlystVimeoLight;
