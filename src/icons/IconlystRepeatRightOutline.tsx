import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRepeatRightOutline = ({
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
      d="M4.686 5.8c-.58.623-.936 1.54-.936 2.687v7.027c0 1.147.356 2.064.936 2.687.575.617 1.425 1.006 2.544 1.006h7.456c1.118 0 1.968-.39 2.543-1.006.58-.623.935-1.54.935-2.687a.75.75 0 1 1 1.5 0c0 1.457-.455 2.761-1.338 3.709-.888.954-2.152 1.484-3.64 1.484H7.23c-1.489 0-2.753-.53-3.642-1.484-.882-.948-1.338-2.252-1.338-3.71V8.488c0-1.457.456-2.762 1.338-3.71.888-.953 2.152-1.484 3.641-1.484h7.457c1.485 0 2.749.53 3.637 1.484.883.948 1.341 2.252 1.341 3.71v3.627a.75.75 0 0 1-1.5 0V8.487c0-1.146-.357-2.063-.938-2.687-.576-.618-1.427-1.007-2.54-1.007H7.229c-1.118 0-1.968.39-2.543 1.007"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.53 9.477a.75.75 0 0 1 0 1.061l-2.106 2.105a.75.75 0 0 1-1.06 0L16.27 10.55a.75.75 0 1 1 1.061-1.06l1.563 1.562 1.575-1.575a.75.75 0 0 1 1.06 0M11.325 8.526a.75.75 0 0 1 .382.654v5.638a.75.75 0 0 1-1.5 0v-4.307l-.53.32A.75.75 0 0 1 8.9 9.55l1.668-1.01a.75.75 0 0 1 .757-.013"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRepeatRightOutline;
