import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsInTheHeart1Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.207 9.102 2.038-.885.159-2.198-2.706-1.822-.16 2.197-2.038.885M15.413 18.61a23 23 0 0 1-1.87 1.193s-6.201-3.377-7.648-7.877M10.926 4.738a5.03 5.03 0 0 1 2.616.989 5.07 5.07 0 0 1 4.54-.766M20.666 6.946c.892 1.407 1.071 3.268.523 4.98M10.415 9.806 8.246 8.218M18.29 17.399l2.74.008-.839-2.676M21.031 17.407l-3.771-2.755"
    />
  </Svg>
);
export default IconlystArrowsInTheHeart1Broken;
