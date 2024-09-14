import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToiletOutline = ({
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
      fill={props.color}
      d="M16.9 21.75a.75.75 0 0 1-.75-.75v-3.42a5.1 5.1 0 0 1 .87-2.857l1.251-1.866c.402-.597.616-1.3.615-2.02V4.158a.41.41 0 0 0-.408-.408h-3.287a.41.41 0 0 0-.408.408v6.9a.75.75 0 1 1-1.5 0v-6.9a1.91 1.91 0 0 1 1.908-1.908h3.287a1.91 1.91 0 0 1 1.908 1.908v6.679a5.1 5.1 0 0 1-.87 2.856l-1.25 1.866a3.6 3.6 0 0 0-.616 2.021V21a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      d="M18.69 21.75H6.332a.75.75 0 1 1 0-1.5H18.69a.75.75 0 1 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M8.475 21.75a.75.75 0 0 1-.75-.75v-4.741a.75.75 0 1 1 1.5 0v4.74a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      d="M14.14 17.094h-4.8a5.23 5.23 0 0 1-5.227-5.227v-.814a.75.75 0 0 1 .75-.75H19.63a.75.75 0 1 1 0 1.5H5.616v.064a3.73 3.73 0 0 0 3.726 3.727h4.8a.75.75 0 1 1 0 1.5zM19.635 6.492h-5.6a.75.75 0 1 1 0-1.5h5.6a.75.75 0 0 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M12.167 11.8a.74.74 0 0 1-.47-.167L5.857 6.908a.75.75 0 1 1 .944-1.166l5.838 4.728a.75.75 0 0 1-.473 1.333z"
    />
  </Svg>
);
export default IconlystToiletOutline;
