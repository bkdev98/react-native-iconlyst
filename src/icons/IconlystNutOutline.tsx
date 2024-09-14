import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNutOutline = ({
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
      d="M7.826 8.058c-1.137.943-1.483 2.226-1.373 3.7h11.095c.109-1.457-.27-2.747-1.42-3.7-.946-.63-2.502-.993-4.15-.995-1.647-.001-3.204.36-4.152.995m4.154-2.495c1.819.002 3.73.397 5.019 1.273l.053.04c1.89 1.543 2.231 3.708 1.902 5.75a.75.75 0 0 1-.74.632H5.784a.75.75 0 0 1-.74-.638c-.308-2.017-.041-4.193 1.858-5.744l.051-.039c1.294-.884 3.208-1.275 5.027-1.274"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.18 3a.75.75 0 0 0-.75-.75c-1.242 0-2.136.702-2.65 1.541-.5.816-.695 1.842-.506 2.686a.75.75 0 1 0 1.464-.327c-.094-.42 0-1.05.321-1.576.307-.5.766-.824 1.37-.824a.75.75 0 0 0 .75-.75M6.75 11.757a.75.75 0 0 1 .75.75c0 1.32.015 2.336.109 3.166.093.823.259 1.414.53 1.895.52.92 1.528 1.628 3.814 2.616 2.287-.988 3.294-1.696 3.814-2.616.272-.481.438-1.072.53-1.895.095-.83.11-1.846.11-3.166a.75.75 0 1 1 1.5 0c0 1.31-.014 2.408-.119 3.335-.105.934-.308 1.743-.715 2.464-.818 1.448-2.349 2.336-4.828 3.385a.75.75 0 0 1-.584 0c-2.479-1.049-4.01-1.937-4.827-3.385-.408-.721-.61-1.53-.716-2.464C6.013 14.915 6 13.817 6 12.507a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNutOutline;
