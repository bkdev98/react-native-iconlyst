import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarLight = ({
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
      d="M10.897 5.084 9.07 8.737c-.18.36-.528.608-.927.664l-4.09.59a1.211 1.211 0 0 0-.682 2.071l2.958 2.842c.291.277.424.68.354 1.076l-.7 4.012a1.228 1.228 0 0 0 1.788 1.28l3.654-1.894c.36-.186.787-.186 1.147 0l3.656 1.895a1.228 1.228 0 0 0 1.787-1.28l-.7-4.013a1.2 1.2 0 0 1 .354-1.075l2.961-2.842a1.211 1.211 0 0 0-.682-2.072l-4.09-.589a1.23 1.23 0 0 1-.928-.664L13.1 5.084a1.24 1.24 0 0 0-2.202 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 4.415v9.274M3.068 10.845l8.933 2.806M20.908 10.845l-8.88 2.805M6.484 21.194l5.51-7.499M17.479 21.194l-5.475-7.51"
    />
  </Svg>
);
export default IconlystStarLight;
