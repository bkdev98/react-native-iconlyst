import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddStarTwoTone = ({
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
      d="M13.688 20.863q-.768.136-1.574.137a9 9 0 1 1 8.675-6.597"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.07 16.576v3.645M19.893 18.4h-3.648M12.114 7.75a6.39 6.39 0 0 0 4.25 4.25 6.39 6.39 0 0 0-4.25 4.25A6.39 6.39 0 0 0 7.864 12a6.39 6.39 0 0 0 4.25-4.25"
    />
  </Svg>
);
export default IconlystAddStarTwoTone;
