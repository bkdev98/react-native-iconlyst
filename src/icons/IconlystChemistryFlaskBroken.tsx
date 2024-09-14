import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChemistryFlaskBroken = ({
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
      d="m17.022 7.419-6.77 11.657a3.88 3.88 0 0 1-5.287 1.403 3.9 3.9 0 0 1-1.8-2.353 3.86 3.86 0 0 1 .397-2.935l1.692-2.914M10.33 3.535 6.944 9.364M9.07 16.258l2.108 1.224M10.143 12.518l2.93 1.701M12.86 9.732l2.107 1.224M9.41 3l8.53 4.953"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.67 13.729 1.622 1.621a2.293 2.293 0 1 1-3.242.001z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChemistryFlaskBroken;
