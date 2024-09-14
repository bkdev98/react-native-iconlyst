import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBirdLight = ({
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
      d="m10.108 10.932-.009-.003M16.36 14.797c1.896 1.348 4.252 1.172 5.64.784-1.27 3.884-11.15 5.973-12.772-.711-.137-.43-.463-3.203-2.086-4.166 0 0 .782-.353 1.053-.461.244-1.457 1.844-1.755 2.637-1.25 1.078.69 1.27 1.94 1.675 2.946 1.778-3.477 5.22-3.095 7.126-6.543.822 3.785 1.64 8.4-3.29 9.41z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.86 17.846c-2.137 1.345-6.016.931-8.86-3.51 2.248.761 3.464.134 5.399-.406.248-.07.717-.274 1.528-.24"
    />
  </Svg>
);
export default IconlystBirdLight;
