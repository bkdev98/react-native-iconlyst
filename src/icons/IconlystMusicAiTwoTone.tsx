import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMusicAiTwoTone = ({
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
      d="M9.8 16.702a3.4 3.4 0 1 1-6.8 0 3.4 3.4 0 0 1 6.8 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.797 9.301c1.765.48 3.53.396 5.306-.132V3.9c-1.811.449-3.57.46-5.306.131zm0 0v7.398"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.404 16.591.101-.273a3.76 3.76 0 0 1 2.222-2.225l.273-.101-.273-.101a3.76 3.76 0 0 1-2.222-2.225l-.1-.274-.102.274a3.76 3.76 0 0 1-2.221 2.225l-.273.101.273.101a3.76 3.76 0 0 1 2.221 2.225zM14.2 19.308a1.77 1.77 0 0 1 1.176-1.179 1.77 1.77 0 0 1-1.177-1.178 1.77 1.77 0 0 1-1.176 1.178 1.77 1.77 0 0 1 1.176 1.178"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMusicAiTwoTone;
