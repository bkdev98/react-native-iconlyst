import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuyTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path
        d="M7.422 19.82a.766.766 0 0 1 0 1.53.764.764 0 1 1 0-1.53M18.675 19.82a.766.766 0 1 1-.002 1.532.766.766 0 0 1 .002-1.532"
        opacity={0.4}
      />
      <Path d="m2.75 3.25 2.08.36.963 11.473a1.8 1.8 0 0 0 1.797 1.653h10.912c.896 0 1.656-.658 1.785-1.546l.949-6.558a1.34 1.34 0 0 0-1.327-1.533H5.164" />
      <Path d="M14.125 10.795h2.773" opacity={0.4} />
    </G>
  </Svg>
);
export default IconlystBuyTwoTone;
