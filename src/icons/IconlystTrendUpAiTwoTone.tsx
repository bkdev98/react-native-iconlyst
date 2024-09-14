import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrendUpAiTwoTone = ({
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
      d="M16.091 4.62H21v4.91"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21 4.62-7.773 7.772-4.09-4.09L3 14.437"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.713 18.794.1-.274a3.76 3.76 0 0 1 2.223-2.224l.272-.102-.273-.1a3.76 3.76 0 0 1-2.221-2.226l-.101-.273-.101.273a3.76 3.76 0 0 1-2.222 2.225l-.273.101.273.102a3.76 3.76 0 0 1 2.222 2.224zM11.157 19.38a1.77 1.77 0 0 1 1.177-1.178 1.77 1.77 0 0 1-1.177-1.178 1.77 1.77 0 0 1-1.177 1.178 1.77 1.77 0 0 1 1.177 1.179"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTrendUpAiTwoTone;
