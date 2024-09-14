import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOldTvAntennaTwoTone = ({
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
      d="M7.53 20.794h9.942a4.03 4.03 0 0 0 4.028-4.03v-5.456a4.03 4.03 0 0 0-4.028-4.029H7.529A4.03 4.03 0 0 0 3.5 11.31v5.456a4.03 4.03 0 0 0 4.03 4.029"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.05 3.205 12.499 7.28 8.061 3.205"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystOldTvAntennaTwoTone;
