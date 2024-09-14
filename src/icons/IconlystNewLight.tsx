import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewLight = ({
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
      d="M6.067 4.175h11.866C20.44 4.175 22 5.945 22 8.448v7.104c0 2.504-1.56 4.273-4.068 4.273H6.067C3.56 19.825 2 18.055 2 15.552V8.448c0-2.504 1.568-4.273 4.067-4.273"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.617 12h1.692m.426-2.129h-2.118v4.258h2.118M14.785 9.91l.76 4.211 1.447-3.053 1.447 3.053.76-4.212M5.148 14.294v-4.34l3.195 4.214V9.833"
    />
  </Svg>
);
export default IconlystNewLight;
