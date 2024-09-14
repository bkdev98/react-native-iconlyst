import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchVirusBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.882 3.324a8.417 8.417 0 0 1 8.417 8.417A8.417 8.417 0 1 1 7.478 4.567M17.611 17.906l3.424 3.417"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.155 14.79h-.544a1.86 1.86 0 0 1-1.859-1.86V11.7a1.86 1.86 0 0 1 1.859-1.86h.544a1.86 1.86 0 0 1 1.859 1.86v1.23a1.86 1.86 0 0 1-1.859 1.86"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.17 8.605.09.532c.084.49.418.902.88 1.085l.97.38M10.647 10.114v-.842a1.237 1.237 0 1 1 2.473 0v.842M15.595 8.605l-.09.532c-.084.49-.418.902-.88 1.085l-.97.38M14.014 11.698c.662-.05 1.319-.114 2.085.194M9.751 11.698c-.661-.05-1.319-.114-2.085.194M8.17 14.973l.093-.532c.08-.489.414-.897.878-1.083l.625-.24M14.002 13.117l.619.241c.464.186.798.593.884 1.083l.087.532"
    />
  </Svg>
);
export default IconlystSearchVirusBroken;
