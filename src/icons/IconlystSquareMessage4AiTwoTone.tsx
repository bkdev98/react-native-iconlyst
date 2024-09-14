import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareMessage4AiTwoTone = ({
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
      d="M11.716 17.6a1 1 0 0 1 .664-.253H18a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h1a.5.5 0 0 1 .5.5v2.387a.5.5 0 0 0 .832.373z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.946 12.208.1-.274A3.76 3.76 0 0 1 16.27 9.71l.273-.102-.273-.1a3.76 3.76 0 0 1-2.222-2.226l-.101-.273-.101.273a3.76 3.76 0 0 1-2.222 2.225l-.273.101.273.102a3.76 3.76 0 0 1 2.222 2.224zM8.635 13.45a1.77 1.77 0 0 1 1.177-1.178 1.77 1.77 0 0 1-1.177-1.179 1.77 1.77 0 0 1-1.176 1.178 1.77 1.77 0 0 1 1.176 1.179"
    />
  </Svg>
);
export default IconlystSquareMessage4AiTwoTone;
