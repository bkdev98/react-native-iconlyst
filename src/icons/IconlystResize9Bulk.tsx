import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize9Bulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M20.502 8.613c0-2.864-2.011-4.788-5.007-4.788H8.367c-1.424 0-2.626.435-3.495 1.2-.958.842-1.512 2.086-1.512 3.588v7.565c0 2.864 2.011 4.788 5.007 4.788h7.127c1.425 0 2.627-.435 3.496-1.2.958-.842 1.512-2.086 1.512-3.588z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.262 13.66c-.01 0-.024-.003-.024 0a.75.75 0 0 1-.492-.206c-.003 0-.001-.002-.003-.002l-.023-.024-.002-.002a.76.76 0 0 1-.206-.491V8.957a.75.75 0 0 1 1.5 0v2.142l6.067-6.067h-2.142a.75.75 0 0 1 0-1.5h3.976a.7.7 0 0 1 .26.056h.002a.8.8 0 0 1 .235.154l.002.002.003.002.01.01s-.008 0 .002.003c0 0 .004-.003 0 0l.003.002a.76.76 0 0 1 .21.52v3.954a.75.75 0 0 1-1.5 0V6.093l-6.067 6.067h2.143a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystResize9Bulk;
