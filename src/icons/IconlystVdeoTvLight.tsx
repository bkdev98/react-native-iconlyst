import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVdeoTvLight = ({
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
      d="M7.862 3.656h9.943a4.03 4.03 0 0 1 4.029 4.03v5.456a4.03 4.03 0 0 1-4.03 4.029H7.863a4.03 4.03 0 0 1-4.028-4.03V7.686a4.03 4.03 0 0 1 4.028-4.029M8.338 20.344h8.99"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.903 11.328a8 8 0 0 1-2.341 1.469c-.755.298-1.389-.074-1.482-.82a14.7 14.7 0 0 1 0-3.13c.102-.773.799-1.102 1.482-.815a7.8 7.8 0 0 1 2.34 1.47c.583.528.597 1.278 0 1.826"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVdeoTvLight;