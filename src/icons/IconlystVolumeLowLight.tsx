import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeLowLight = ({
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
      d="M7.18 6.51c.463 0 1.006-.13 1.4-.377l3.384-2.116c2.03-1.269 4.51.255 4.655 2.62q.39 5.363 0 10.725c-.125 2.362-2.624 3.89-4.655 2.62l-3.385-2.115c-.393-.247-.929-.377-1.392-.377-1.735-.13-2.292.074-3.249-.715-1.012-.847-.937-3.113-.937-4.776 0-1.66-.077-3.927.937-4.774.95-.79 1.516-.587 3.243-.715"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 8.193v7.613"
    />
  </Svg>
);
export default IconlystVolumeLowLight;
