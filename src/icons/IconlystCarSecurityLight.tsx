import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarSecurityLight = ({
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
      d="M18.423 20.464s2.804-.817 2.804-3.069.102-2.426-.123-2.645c-.226-.218-2.313-.917-2.681-.917s-2.456.7-2.681.917-.123.393-.123 2.645c0 2.253 2.804 3.07 2.804 3.07"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.504 11.805h1.614M6.53 11.805h1.614M3.25 8.044a57.5 57.5 0 0 0 16.14 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.407 11.56c-.001-.728-.233-1.437-.663-2.024l-1.047-1.405a1.6 1.6 0 0 1-.201-.383l-.942-2.617A2.01 2.01 0 0 0 15 3.83a23.6 23.6 0 0 0-7.337 0c-.7.116-1.31.63-1.544 1.3l-.942 2.617a1.5 1.5 0 0 1-.201.366L3.913 9.58a3.4 3.4 0 0 0-.646 1.998l-.015 4.675c-.001.497.401.9.898.9h1.78a.9.9 0 0 0 .898-.898v-.368c0-.495.402-.897.898-.897h4.42"
    />
  </Svg>
);
export default IconlystCarSecurityLight;
