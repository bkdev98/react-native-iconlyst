import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonSquareLight = ({
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
      d="M7.896 3h8.435c2.948 0 4.783 2.081 4.783 5.026v7.948c0 2.945-1.835 5.026-4.784 5.026H7.896c-2.948 0-4.782-2.081-4.782-5.026V8.026C3.114 5.081 4.957 3 7.896 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.163 13.264c-.025-.013-.056.01-.047.038a5.104 5.104 0 0 0 4.9 3.698 5.1 5.1 0 0 0 1.405-9.999c-.027-.008-.05.022-.037.048a4.605 4.605 0 0 1-.815 5.406 4.6 4.6 0 0 1-5.406.81"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.99 7.82.01.01M9.065 10.71l.01.01"
    />
  </Svg>
);
export default IconlystMoonSquareLight;
