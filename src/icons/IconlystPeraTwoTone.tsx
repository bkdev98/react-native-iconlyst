import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPeraTwoTone = ({
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
      d="M11.318 20.696c1.78.594 3.513.275 4.91-.59 1.447-.777 2.59-2.118 2.965-3.957.617-2.766-.755-5.692-3.29-6.975-1.043-.527-2.086-.998-2.715-2.093-2.306-3.985-5.511-2-5.604-1.946-.093.053-3.414 1.837-1.116 5.826.634 1.092.52 2.23.455 3.397-.157 2.838 1.691 5.488 4.395 6.338"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.965 13.314a2.303 2.303 0 1 0-3.99 2.302 2.303 2.303 0 0 0 3.99-2.302"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.584 5.135C6.986 4.2 7.012 3 7.012 3"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPeraTwoTone;
