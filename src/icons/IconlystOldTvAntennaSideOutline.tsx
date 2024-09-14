import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOldTvAntennaSideOutline = ({
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
      d="M2.5 11.308A4.78 4.78 0 0 1 7.28 6.53h9.942A4.78 4.78 0 0 1 22 11.31v5.456c0 2.64-2.14 4.779-4.778 4.779H7.279a4.78 4.78 0 0 1-4.779-4.78zM7.28 8.03A3.28 3.28 0 0 0 4 11.31v5.456a3.28 3.28 0 0 0 3.28 3.279h9.942a3.28 3.28 0 0 0 3.278-3.28v-5.456a3.28 3.28 0 0 0-3.278-3.279z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.396 2.578a.75.75 0 0 1 1.04.21l2.085 3.145 2.143-3.152a.75.75 0 1 1 1.24.844L11.134 7.7a.75.75 0 0 1-1.245-.008L7.186 3.618a.75.75 0 0 1 .21-1.04"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.478 7.28a.75.75 0 0 1 .75-.75h3.724a4.78 4.78 0 0 1 4.78 4.78v5.456a4.78 4.78 0 0 1-4.78 4.779H7.228a.75.75 0 0 1 0-1.5h3.724a3.28 3.28 0 0 0 3.28-3.28V11.31a3.28 3.28 0 0 0-3.28-3.28H7.228a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOldTvAntennaSideOutline;
