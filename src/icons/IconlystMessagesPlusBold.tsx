import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesPlusBold = ({
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
      d="M14.877 13.144h-1.826v1.842a.75.75 0 0 1-1.5 0v-1.842H9.725a.75.75 0 0 1 0-1.5h1.826V9.808a.75.75 0 0 1 1.5 0v1.836h1.826a.75.75 0 0 1 0 1.5m4.144-7.487a9.42 9.42 0 0 0-6.719-2.79c-2.539 0-4.925.99-6.718 2.79-2.805 2.816-3.57 7.137-1.913 10.729.197.492.317.81.317 1.092 0 .333-.142.749-.279 1.15-.264.78-.565 1.663.079 2.309.647.649 1.531.343 2.309.075.398-.138.809-.28 1.135-.281.29 0 .656.147 1.079.318a9.516 9.516 0 0 0 10.71-1.916c3.701-3.715 3.701-9.76 0-13.476"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesPlusBold;
