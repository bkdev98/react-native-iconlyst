import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBathLight = ({
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
      d="M16.561 18.87H7.44A4.44 4.44 0 0 1 3 14.433v-.783a1.3 1.3 0 0 1 1.3-1.3h15.4c.718 0 1.3.582 1.3 1.3v.783a4.44 4.44 0 0 1-4.439 4.438"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.945 12.348V5.302a2.02 2.02 0 0 0-2.323-1.998l-1.873.282a2.02 2.02 0 0 0-1.72 1.999V6.59"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.006 8.43c0-1.046.96-1.888 2.123-1.839 1.089.047 1.926.9 1.926 1.89 0 .192-.17.347-.382.347h-3.285c-.21 0-.382-.155-.382-.347z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.439 18.87 6.07 20.72M18.068 20.719 16.7 18.87"
    />
  </Svg>
);
export default IconlystBathLight;
