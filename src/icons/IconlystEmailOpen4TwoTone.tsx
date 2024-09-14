import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailOpen4TwoTone = ({
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
      d="M3.5 10.524c0-1.002.49-1.94 1.312-2.513l6.16-4.292a2.67 2.67 0 0 1 3.057 0l6.16 4.292a3.06 3.06 0 0 1 1.311 2.513v5.845c0 2.765-1.845 4.398-4.582 4.391H8.082C5.345 20.767 3.5 19.134 3.5 16.37z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.191 11.891c0-1.713 1.146-2.71 2.832-2.71h4.936c1.703 0 2.85.997 2.85 2.71l-4.005 3.252a2.07 2.07 0 0 1-2.574 0z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystEmailOpen4TwoTone;