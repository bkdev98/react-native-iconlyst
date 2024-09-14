import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAntenaHideOutline = ({
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
      fillRule="evenodd"
      d="M19.957 4.795c0-.926-1.125-1.395-1.785-.736l-4.011 4.012a.75.75 0 0 1-1.06-1.06l4.01-4.012c1.604-1.604 4.346-.468 4.346 1.796v9.831a.75.75 0 0 1-1.5 0zm-11.6 3.314a.75.75 0 0 1 1.06 0l1.779 1.778a1 1 0 0 1 .088.089l9.385 9.384a1 1 0 0 1 .089.089l1.02 1.02a.75.75 0 0 1-1.06 1.06l-.613-.612a2.5 2.5 0 0 1-1.187.297H5.048c-2.265 0-3.4-2.74-1.798-4.343l6.4-6.409L8.357 9.17a.75.75 0 0 1 0-1.06m2.353 3.414L4.311 17.93c-.658.658-.19 1.783.736 1.783h13.855z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAntenaHideOutline;
