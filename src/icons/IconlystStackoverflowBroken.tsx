import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStackoverflowBroken = ({
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
      d="M7.533 17.684h8.186M7.695 13.684l7.982 1.819M16.562 13.192l-3.338-1.446M11.417 6.344l6.338 5.18M14.432 3.383l4.954 6.516M18.833 15.758v2.732c0 2.165-1.349 2.893-3.516 2.893h-3.594M8.128 21.383c-2.167 0-3.515-.728-3.515-2.893v-2.732M9.066 9.902l1.874.823"
    />
  </Svg>
);
export default IconlystStackoverflowBroken;
