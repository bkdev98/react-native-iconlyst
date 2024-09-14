import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZendeskLight = ({
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
      d="M3 5.027h7.56c-.019.454-.081.911-.251 1.335a3.77 3.77 0 0 1-1.986 2.076 3.79 3.79 0 0 1-2.986.043 3.8 3.8 0 0 1-1.821-1.574A3.75 3.75 0 0 1 3 5.027M13.44 5.027H21q-3.333 3.986-6.67 7.97c-.297.362-.611.712-.897 1.084.02-.45.003-.9.009-1.35zM10.569 9.918c-.013.109-.01.218-.01.328v8.726H3.003l7.485-8.94zM16.242 15.36c.46-.129.944-.149 1.417-.104.486.054.953.217 1.387.437.365.213.711.468.99.788a3.74 3.74 0 0 1 .964 2.49h-7.56c.02-.55.118-1.108.369-1.603a3.8 3.8 0 0 1 2.433-2.008"
    />
  </Svg>
);
export default IconlystZendeskLight;
