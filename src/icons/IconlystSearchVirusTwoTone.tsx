import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchVirusTwoTone = ({
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
      d="m17.86 17.866 3.425 3.417zM12.133 3.283a8.417 8.417 0 0 1 8.417 8.417 8.417 8.417 0 1 1-8.417-8.417"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.405 14.749h-.544a1.86 1.86 0 0 1-1.859-1.86v-1.23a1.86 1.86 0 0 1 1.859-1.86h.544a1.86 1.86 0 0 1 1.859 1.86v1.23a1.86 1.86 0 0 1-1.859 1.86"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.42 8.564.09.532c.084.49.418.902.88 1.085l.97.38M10.897 10.073v-.842a1.237 1.237 0 1 1 2.473 0v.842M15.845 8.564l-.09.532c-.084.49-.418.902-.88 1.085l-.97.38M14.264 11.657c.662-.05 1.319-.114 2.085.194M10.001 11.657c-.661-.05-1.319-.114-2.085.194M8.42 14.932l.093-.532c.08-.489.414-.897.878-1.083l.625-.24M14.252 13.076l.619.241c.464.186.798.593.884 1.083l.087.532"
    />
  </Svg>
);
export default IconlystSearchVirusTwoTone;
