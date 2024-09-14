import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsWaveSquareTwoTone = ({
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
      d="M3.5 16.218V7.783C3.5 4.835 5.581 3 8.526 3h7.948C19.419 3 21.5 4.835 21.5 7.783v8.435c0 2.948-2.081 4.782-5.026 4.782H8.526C5.581 21 3.5 19.156 3.5 16.218"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.769 8.895v6.21M7.037 10.838v2.324M17.962 10.838v2.324M15.23 8.895v6.21M12.5 7.098v9.805"
    />
  </Svg>
);
export default IconlystSongsWaveSquareTwoTone;
