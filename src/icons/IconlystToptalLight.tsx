import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToptalLight = ({
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
      d="M8.805 4.913 10.72 3l7.711 7.711-.003.003.003.003-5.802 5.803 2.566 2.566L13.28 21l-7.71-7.711.002-.003-.003-.003 5.803-5.803zm4.48 4.48-3.892 3.893 1.321 1.32 3.892-3.892z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystToptalLight;
