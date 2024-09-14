import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQRScanBold = ({
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
      d="M8.367 18.282a.747.747 0 0 1-.746.746H4.746A.747.747 0 0 1 4 18.282v-2.874c0-.412.335-.746.746-.746H7.62c.412 0 .746.334.746.746zm-.746-5.62H4.746A2.75 2.75 0 0 0 2 15.408v2.874a2.75 2.75 0 0 0 2.746 2.746H7.62a2.75 2.75 0 0 0 2.746-2.746v-2.874a2.75 2.75 0 0 0-2.746-2.746"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.182 15.835a1 1 0 0 0-1 1v.01c0 .552.448.995 1 .995s1-.453 1-1.005a1 1 0 0 0-1-1M6.182 5.225a1 1 0 0 0-1 1v.011c0 .552.448.994 1 .994s1-.453 1-1.005a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.367 7.673a.746.746 0 0 1-.746.745H4.746A.746.746 0 0 1 4 7.673V4.798c0-.411.335-.745.746-.745H7.62c.412 0 .746.334.746.745zm-.746-5.62H4.746A2.75 2.75 0 0 0 2 4.798v2.875a2.75 2.75 0 0 0 2.746 2.745H7.62a2.75 2.75 0 0 0 2.746-2.745V4.798A2.75 2.75 0 0 0 7.62 2.053M14.607 4.798c0-.411.334-.745.746-.745h2.875c.41 0 .744.334.744.745v2.875a.745.745 0 0 1-.744.745h-2.875a.746.746 0 0 1-.746-.745zm.746 5.62h2.875a2.747 2.747 0 0 0 2.744-2.745V4.798a2.75 2.75 0 0 0-2.744-2.745h-2.875a2.75 2.75 0 0 0-2.746 2.745v2.875a2.75 2.75 0 0 0 2.746 2.745"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.79 7.248a1 1 0 0 0 1-1v-.011a.996.996 0 0 0-1-.995c-.551 0-1 .454-1 1.006a1 1 0 0 0 1 1M14.607 16.768a2.39 2.39 0 0 1 2.385-2.385 2.39 2.39 0 0 1 2.386 2.385 2.39 2.39 0 0 1-2.386 2.384 2.39 2.39 0 0 1-2.385-2.384m7.1 3.472-1.06-1.058a4.36 4.36 0 0 0 .731-2.414 4.39 4.39 0 0 0-4.386-4.385 4.39 4.39 0 0 0-4.385 4.385 4.39 4.39 0 0 0 4.385 4.384c.8 0 1.541-.231 2.188-.607l1.114 1.11a1 1 0 1 0 1.413-1.416"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystQRScanBold;
