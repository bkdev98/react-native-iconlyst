import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSparksAiLight = ({
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
      d="M3 15.925a7.45 7.45 0 0 1 4.791 4.792 7.45 7.45 0 0 1 4.791-4.792 7.45 7.45 0 0 1-4.791-4.79A7.45 7.45 0 0 1 3 15.924M14.649 10.966a4.94 4.94 0 0 1 3.175 3.176A4.94 4.94 0 0 1 21 10.966a4.94 4.94 0 0 1-3.176-3.176 4.94 4.94 0 0 1-3.175 3.176M9.121 5.249a3.06 3.06 0 0 1 1.966 1.966 3.06 3.06 0 0 1 1.966-1.966 3.06 3.06 0 0 1-1.966-1.966 3.06 3.06 0 0 1-1.966 1.966"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSparksAiLight;
