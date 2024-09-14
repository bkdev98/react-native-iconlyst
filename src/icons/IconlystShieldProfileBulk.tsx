import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldProfileBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M19.87 8.54c-.02.97-.05 2.29-.05 4.13 0 2.25-.94 4-2.16 5.33-.38.41-.78.78-1.19 1.1-2.05 1.66-4.28 2.36-4.32 2.37a.4.4 0 0 1-.3 0c-.04-.01-2.29-.71-4.34-2.38-.41-.33-.81-.7-1.18-1.11-1.22-1.32-2.15-3.07-2.15-5.31 0-1.84-.03-3.17-.05-4.14-.04-2.4-.05-2.84.51-3.4.71-.7 6.34-2.63 7.36-2.63s6.65 1.93 7.36 2.63c.56.57.55 1 .51 3.41"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.66 18c-.38.41-.78.78-1.19 1.1-.25-.88-1.17-2.43-4.49-2.43s-4.23 1.55-4.47 2.42c-.41-.33-.81-.7-1.18-1.11.72-1.52 2.47-2.81 5.65-2.81 3.2 0 4.95 1.3 5.68 2.83M11.98 12.59c-1.15 0-2.1-.94-2.1-2.09 0-1.16.95-2.11 2.1-2.11 1.16 0 2.1.95 2.1 2.11 0 1.15-.94 2.09-2.1 2.09m0-5.7c-1.98 0-3.6 1.62-3.6 3.61 0 1.98 1.62 3.59 3.6 3.59 1.99 0 3.6-1.61 3.6-3.59 0-1.99-1.61-3.61-3.6-3.61"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShieldProfileBulk;
