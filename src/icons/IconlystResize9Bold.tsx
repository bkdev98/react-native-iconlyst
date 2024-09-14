import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize9Bold = ({
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
      d="M19.89 11.235c-.655 0-1.26-.21-1.753-.565a.324.324 0 0 0-.418.025l-.045.045a.324.324 0 0 0-.023.417 3 3 0 0 1-2.435 4.753h-4.012a3 3 0 0 1-2.064-.879 2.98 2.98 0 0 1-.879-2.074v-4a3 3 0 0 1 4.753-2.436.32.32 0 0 0 .418-.023l.045-.046a.324.324 0 0 0 .024-.417 3 3 0 0 1-.56-1.864c.01-.184-.124-.347-.308-.347H8.367c-2.996 0-5.007 1.925-5.007 4.79v7.564c0 2.864 2.011 4.788 5.007 4.788h7.127c2.997 0 5.008-1.924 5.008-4.788v-4.637c0-.19-.176-.332-.365-.316a3 3 0 0 1-.247.01"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.262 13.66c-.01 0-.024-.003-.024 0a.75.75 0 0 1-.492-.206c-.003 0-.001-.002-.003-.002l-.023-.024-.002-.002a.76.76 0 0 1-.206-.491V8.957a.75.75 0 0 1 1.5 0v2.142l6.067-6.067h-2.142a.75.75 0 0 1 0-1.5h3.976a.7.7 0 0 1 .26.056h.002a.8.8 0 0 1 .235.154l.002.002.003.002.01.01s-.008 0 .002.003c0 0 .004-.003 0 0l.003.002a.76.76 0 0 1 .21.52v3.954a.75.75 0 0 1-1.5 0V6.093l-6.067 6.067h2.143a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystResize9Bold;
