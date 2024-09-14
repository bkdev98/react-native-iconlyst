import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCheersBroken = ({
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
      d="M14.938 16.233c.95 1.139 2.859.92 3.527-.404 1.15-2.274.43-6.267-.244-8.427l-4.948.566c-.112 1.497-.061 3.785.462 5.726M5.57 14.77c.607 1.354 2.503 1.66 3.506.567 1.721-1.878 2.11-5.916 2.047-8.179l-4.917-.795c-.545 1.498-1.155 3.904-1.103 6.008"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.008 11.886c-1.097.319-2.548-.044-3.779-.54M11.012 9.547c-.79.446-2.295 1.12-3.74 1.348M16.805 16.96l.516 4.51m1.739-.198-3.478.398M7.155 16l-.706 4.46m-1.742-.28 3.455.558M10.243 5.084l-.947-1.03M14.58 5.672l1.154-.79M12.563 4.57l.191-1.386"
    />
  </Svg>
);
export default IconlystCheersBroken;
