import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPencilBulk = ({
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
      d="M11.12 7.655a.3.3 0 0 1 .421-.066l5.027 3.695a.3.3 0 0 1 .065.417l-4.386 6.079c-.53.76-1.31 1.32-2.21 1.58l-1.655.489h-.01l-.01.002-.565.169c-.93.27-1.86-.43-1.87-1.4v-.379l-.002-.042c-.008-.062-.008-.116-.008-.18l-.01-1.77c-.01-.86.25-1.7.74-2.4z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m18.637 8.92-.773 1.074a.3.3 0 0 1-.42.066l-5.039-3.696a.297.297 0 0 1-.063-.416l.765-1.058a2.35 2.35 0 0 1 3.28-.52l1.74 1.27c1.05.76 1.28 2.23.51 3.28"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPencilBulk;
