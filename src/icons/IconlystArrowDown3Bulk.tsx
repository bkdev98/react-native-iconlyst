import * as React from 'react';
import Svg, { Defs, Path, G, Mask, Use } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDown3Bulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Defs>
      <Path id="prefix__a" d="M0 .534h10.897v8.94H0z" />
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path
        fill={props.color}
        fillRule="nonzero"
        d="M12.66 3.71v8.479a.71.71 0 0 1-1.422 0V3.71a.71.71 0 0 1 1.421 0"
        opacity={0.4}
      />
      <G transform="translate(6.5 10.944)">
        <Mask id="prefix__b" fill="#fff">
          <Use xlinkHref="#prefix__a" />
        </Mask>
        <Path
          fill={props.color}
          fillRule="nonzero"
          d="M10.897 1.245a.7.7 0 0 1-.109.379L6.05 9.142a.712.712 0 0 1-1.203 0L.109 1.624A.71.71 0 0 1 .09.902.71.71 0 0 1 .711.534h9.475a.71.71 0 0 1 .71.71"
          mask="url(#prefix__b)"
        />
      </G>
    </G>
  </Svg>
);
export default IconlystArrowDown3Bulk;
