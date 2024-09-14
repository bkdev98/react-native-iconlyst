import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsInTheHeart1Light = ({
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
      d="m5.707 9.102 2.038-.885.159-2.198-2.706-1.822-.16 2.197L3 7.279z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.913 18.61a23 23 0 0 1-1.87 1.193s-6.201-3.377-7.648-7.877M10.426 4.738a5.03 5.03 0 0 1 2.616.989 5.07 5.07 0 0 1 4.54-.766c2.947.95 4.005 4.157 3.107 6.966M9.915 9.806 7.746 8.218M17.79 17.399l2.74.008-.839-2.676M20.531 17.407l-3.771-2.755"
    />
  </Svg>
);
export default IconlystArrowsInTheHeart1Light;
