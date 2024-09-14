import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserAnalyzeBold = ({
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
      d="M13.28 20.759a1 1 0 0 1-.708-1.708l2.32-2.316a1 1 0 0 1 1.413 0l1.155 1.156 1.672-1.671a1 1 0 0 1 1.415 0 1.003 1.003 0 0 1 0 1.416l-2.38 2.377a1 1 0 0 1-1.415-.001l-1.155-1.155-1.61 1.61a1 1 0 0 1-.708.292M10.745 3C8.139 3 6.027 5.144 6.027 7.786c0 2.644 2.112 4.786 4.718 4.786s4.718-2.142 4.718-4.786C15.463 5.144 13.35 3 10.745 3M12.008 13.926H8.385c-2.667 0-4.923 2.289-4.923 4.994 0 .504 0 1.105.093 1.614q.007.052.013.102c.031.19.227.365.509.365H9.8a.78.78 0 0 0 .722-.488l2.213-5.511a.784.784 0 0 0-.727-1.076"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserAnalyzeBold;
