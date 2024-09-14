import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCSS3Light = ({
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
      d="M12.756 20.853a2.02 2.02 0 0 1-1.513 0l-4.745-1.92a2.02 2.02 0 0 1-1.252-1.673L4.066 5.214A2.02 2.02 0 0 1 6.072 3h11.853a2.02 2.02 0 0 1 2.008 2.214l-1.18 12.046a2.02 2.02 0 0 1-1.252 1.674z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.385 7.438h7.23l-.714 8.346-2.948.776-2.886-.776-.186-1.21M10.525 11.844h4.438"
    />
  </Svg>
);
export default IconlystCSS3Light;
