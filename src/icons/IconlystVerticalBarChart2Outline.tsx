import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVerticalBarChart2Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.5 20.87h-18a.75.75 0 1 1 0-1.5h18a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.351 14.867h-3.09c-.088 0-.21.082-.21.25v5a.75.75 0 0 1-1.5 0v-5c0-.938.736-1.75 1.71-1.75h3.84a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0zM14.9 8.368h3.84c.973 0 1.71.812 1.71 1.75v10a.75.75 0 0 1-1.5 0v-10c0-.168-.122-.25-.21-.25h-3.09v10.25a.75.75 0 0 1-1.5 0v-11a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.94 4.868h-2.88c-.088 0-.21.082-.21.25v15.001a.75.75 0 0 1-1.5 0V5.118c0-.938.736-1.75 1.71-1.75h2.88c.973 0 1.71.812 1.71 1.75v15.001a.75.75 0 0 1-1.5 0V5.118c0-.168-.123-.25-.21-.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVerticalBarChart2Outline;
