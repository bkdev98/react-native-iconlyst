import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCropBroken = ({
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
      d="M9.53 19.277A3.675 3.675 0 0 1 5.854 15.6V3.945M21.186 19.277h-7.778M18.512 21.942V19.28M5.849 6.617H3.186M9.637 6.62h5.198a3.67 3.67 0 0 1 3.673 3.672v5.198"
    />
  </Svg>
);
export default IconlystCropBroken;
