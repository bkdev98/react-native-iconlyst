import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCheersTwoTone = ({
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
      d="M14.938 16.233c-1.633-1.956-1.834-6.008-1.665-8.265l4.948-.566c.674 2.16 1.393 6.153.244 8.427-.668 1.325-2.576 1.543-3.527.404M9.076 15.337c1.721-1.878 2.11-5.916 2.047-8.179l-4.917-.795c-.773 2.127-1.677 6.082-.635 8.407.606 1.354 2.502 1.66 3.505.567"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.273 10.36c1.159.728 3.928 2.051 5.735 1.526M11.012 9.547c-1.192.673-4.02 1.867-5.8 1.259M16.805 16.96l.516 4.51m1.738-.198-3.477.398M7.155 16l-.706 4.46m-1.742-.28 3.455.558M10.243 5.084l-.947-1.03M14.58 5.672l1.154-.79M12.563 4.57l.191-1.386"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCheersTwoTone;
