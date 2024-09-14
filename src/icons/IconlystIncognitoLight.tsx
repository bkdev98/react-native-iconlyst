import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIncognitoLight = ({
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
      d="M10.293 17.182a3.003 3.003 0 1 1-6.006 0 3.003 3.003 0 0 1 6.006 0M19.715 17.182a3.003 3.003 0 1 1-6.006 0 3.003 3.003 0 0 1 6.006 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.293 17.144c1.19-.395 2.328-.39 3.415 0M3 10.979c5.956-.981 11.956-.967 18 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.975 10.335 17.65 5.522a1.552 1.552 0 0 0-2.076-1.028l-2.917 1.172a1.56 1.56 0 0 1-1.158 0L8.583 4.494a1.552 1.552 0 0 0-2.076 1.028l-1.323 4.813"
    />
  </Svg>
);
export default IconlystIncognitoLight;
