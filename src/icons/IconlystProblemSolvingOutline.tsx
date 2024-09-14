import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProblemSolvingOutline = ({
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
      d="M5.496 17.37a1.19 1.19 0 1 0 0 2.38 1.19 1.19 0 0 0 0-2.38m-2.69 1.19a2.69 2.69 0 1 1 5.38 0 2.69 2.69 0 0 1-5.38 0M17.109 3.32a1.14 1.14 0 0 1 1.975 0l1.957 3.39a1.14 1.14 0 0 1-.988 1.71H16.14a1.14 1.14 0 0 1-.988-1.71zm.988 1.29-1.335 2.31h2.669zM4.399 3.39a.75.75 0 0 1 1.06 0l1.276 1.275L8.011 3.39a.75.75 0 1 1 1.06 1.06L7.797 5.726l1.276 1.276a.75.75 0 0 1-1.06 1.06L6.734 6.787 5.46 8.062a.75.75 0 0 1-1.061-1.06l1.276-1.276L4.399 4.45a.75.75 0 0 1 0-1.06M14.122 15.495a.75.75 0 0 1 1.06 0l1.277 1.276 1.275-1.276a.75.75 0 0 1 1.06 1.06l-1.275 1.276 1.276 1.276a.75.75 0 0 1-1.06 1.06l-1.276-1.275-1.276 1.276a.75.75 0 0 1-1.061-1.06l1.276-1.277-1.276-1.275a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.925 7.055a.75.75 0 0 1 .75.75v.87a3.68 3.68 0 0 1-3.68 3.68H8.427a2.18 2.18 0 0 0-2.18 2.18v2.024a.75.75 0 0 1-1.5 0v-2.024a3.68 3.68 0 0 1 3.68-3.68h6.568a2.18 2.18 0 0 0 2.18-2.18v-.87a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystProblemSolvingOutline;
