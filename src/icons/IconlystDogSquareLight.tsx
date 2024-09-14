import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDogSquareLight = ({
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
      d="M15.108 14.424c.175.446.772 1.47 1.754 1.996"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.656 10.505c-.265 1.407-.512 4.658 1.881 4.361 0 0 1.778-1.041.794-4.646-.601-2.202-2.041-2.899-3.41-2.78l-1.209.095C9.138 7.639 8.922 8.942 9.01 9.5l-2.599 1.104c.023.966.474 2.852 2.093 2.668 1.62-.184 2.147-.322 2.208-.368.322.989.178 2.758-.667 4.145"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.035 3.3H7.601c-2.949 0-4.783 2.082-4.783 5.027v7.947c0 2.946 1.834 5.027 4.783 5.027h8.434c2.948 0 4.783-2.081 4.783-5.027V8.327c0-2.945-1.843-5.026-4.783-5.026"
    />
  </Svg>
);
export default IconlystDogSquareLight;
