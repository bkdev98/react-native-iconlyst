import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMeteoriteLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.955 4.475 10.87 7.56M19.633 7.232 18.18 8.687M19.535 3.348 18.08 4.802M15.644 11.47l-.01.01M6.412 16.729l-.01.01M10.357 17.843l-.01.01M20.795 11.481l-3.288 3.289M11.834 12.621l-.66-.601a2.07 2.07 0 0 0-1.392-.539H5.857c-1.066 0-1.957.81-2.057 1.87l-.357 3.746c-.07.737.259 1.455.863 1.883l2.809 1.988a2.07 2.07 0 0 0 1.731.31l3.712-1a1.98 1.98 0 0 0 1.451-2.167c-.128-1.005-1.284-1.827-1.407-2.834a3 3 0 0 1-.016-.385c.022-.833-.136-1.71-.752-2.271"
    />
  </Svg>
);
export default IconlystMeteoriteLight;
