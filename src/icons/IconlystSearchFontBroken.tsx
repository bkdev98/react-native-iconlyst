import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchFontBroken = ({
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
      d="M3.25 7.837V5.57h12.78v2.267M19.755 16.588l1.495 1.492m-3.516-6.639a2.97 2.97 0 1 1 0 5.942 2.97 2.97 0 0 1 0-5.942M9.58 5.568v4.216M9.579 18.43V13m-2.79 5.432h5.702"
    />
  </Svg>
);
export default IconlystSearchFontBroken;
