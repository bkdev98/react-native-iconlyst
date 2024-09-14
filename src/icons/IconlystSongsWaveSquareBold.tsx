import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsWaveSquareBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M18.211 13.162a.75.75 0 0 1-1.5 0v-2.325a.75.75 0 0 1 1.5 0zm-2.731 1.943a.75.75 0 0 1-1.5 0v-6.21a.75.75 0 0 1 1.5 0zm-2.73 1.798a.75.75 0 0 1-1.5 0V7.098a.75.75 0 0 1 1.5 0zm-2.732-1.798a.75.75 0 0 1-1.5 0v-6.21a.75.75 0 0 1 1.5 0zm-2.731-1.943a.75.75 0 0 1-1.5 0v-2.324a.75.75 0 0 1 1.5 0zM15.973 2.5H8.026C4.72 2.5 2.5 4.623 2.5 7.783v8.435c0 3.159 2.22 5.282 5.526 5.282h7.947c3.305 0 5.527-2.123 5.527-5.282V7.783c0-3.16-2.222-5.283-5.527-5.283"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongsWaveSquareBold;
