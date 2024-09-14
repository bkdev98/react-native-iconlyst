import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailOpen3TwoTone = ({
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
      d="m3.885 9.041 6.543 5.274a3.38 3.38 0 0 0 4.193 0L21.12 9.04"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.576 12.043c0-1.587 1.067-2.512 2.628-2.512h4.572c1.58 0 2.646.925 2.646 2.512"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystEmailOpen3TwoTone;
