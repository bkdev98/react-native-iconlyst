import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFire3Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.004 9.497C17.802 7 15.712 4.957 12.79 3.427a.5.5 0 0 0-.728.508c.297 2.276-.116 5.453-1.323 6.829-.392.447-.832.672-1.342.686-.34-.571-.685-3.017-.685-3.58a.499.499 0 0 0-.79-.407c-.383.273-1.227 1.063-1.49 1.325-2.644 2.518-3.26 6.2-1.57 9.38 1.419 2.668 4.012 4.204 6.883 4.204a8.4 8.4 0 0 0 1.795-.198c2.482-.41 4.469-1.869 5.596-4.107 1.303-2.588 1.252-5.87-.133-8.57"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFire3Bold;
