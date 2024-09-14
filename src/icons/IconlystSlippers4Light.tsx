import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlippers4Light = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.76 5.384a6.006 6.006 0 0 0 0 8.494s5.147 4.326 7.935 6.618c2.096 1.724 5.043 1.373 6.794-.383 1.756-1.75 2.107-4.698.382-6.794-2.292-2.788-6.617-7.935-6.617-7.935a6.005 6.005 0 0 0-8.495 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.029 13.52-.076-2.944 3.961-.9M8.965 10.565l-.98-.981"
    />
  </Svg>
);
export default IconlystSlippers4Light;
