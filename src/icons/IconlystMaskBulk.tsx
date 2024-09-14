import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMaskBulk = ({
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
      d="M21.934 9.072a.195.195 0 0 0-.318-.058l-7.673 7.605a.5.5 0 0 0-.148.356v2.767a.2.2 0 0 0 .34.142l8.307-8.218a.49.49 0 0 0 .14-.424 9 9 0 0 0-.648-2.17M19.42 5.62a.293.293 0 0 0-.4.016l-5.077 5.02a.5.5 0 0 0-.149.356v2.78a.2.2 0 0 0 .341.141l6.576-6.51a.294.294 0 0 0 .03-.387 9.7 9.7 0 0 0-1.32-1.415M14.227 3.266a.387.387 0 0 0-.432.389v4.173a.2.2 0 0 0 .34.143l3.304-3.264a.29.29 0 0 0-.068-.468 9.6 9.6 0 0 0-3.144-.973M14.226 22.28c-.134.132-.03.353.156.326 4.209-.608 7.566-3.921 8.237-8.116.03-.185-.19-.293-.323-.161z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.749 12.945c0 5.172 4.223 9.525 9.35 9.742.22.009.4-.171.4-.392v-18.7c0-.22-.18-.4-.4-.392-5.13.217-9.35 4.566-9.35 9.742"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMaskBulk;
