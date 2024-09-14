import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsWaveSquareBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M16.543 2.5H8.596C5.29 2.5 3.07 4.623 3.07 7.783v8.435c0 3.159 2.22 5.282 5.526 5.282h7.947c3.305 0 5.527-2.123 5.527-5.282V7.783c0-3.16-2.222-5.283-5.527-5.283"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M18.031 13.912a.75.75 0 0 0 .75-.75v-2.325a.75.75 0 0 0-1.5 0v2.325c0 .414.336.75.75.75M15.3 15.855a.75.75 0 0 0 .75-.75v-6.21a.75.75 0 0 0-1.5 0v6.21c0 .414.336.75.75.75M12.57 17.653a.75.75 0 0 0 .75-.75V7.098a.75.75 0 0 0-1.5 0v9.805c0 .414.336.75.75.75M9.838 15.855a.75.75 0 0 0 .75-.75v-6.21a.75.75 0 0 0-1.5 0v6.21c0 .414.336.75.75.75M7.107 13.912a.75.75 0 0 0 .75-.75v-2.324a.75.75 0 0 0-1.5 0v2.324c0 .414.336.75.75.75"
    />
  </Svg>
);
export default IconlystSongsWaveSquareBulk;
