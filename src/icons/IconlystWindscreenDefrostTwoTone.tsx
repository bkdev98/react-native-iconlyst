import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWindscreenDefrostTwoTone = ({
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
      d="M15.97 19.684a3.87 3.87 0 0 0 0-4.261 3.87 3.87 0 0 1 0-4.26M8.952 19.684a3.87 3.87 0 0 0 0-4.261 3.87 3.87 0 0 1 0-4.26M12.461 19.684a3.87 3.87 0 0 0 0-4.261 3.87 3.87 0 0 1 0-4.26"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.537 14.537c1.062.177 2.032.446 2.815.805a.94.94 0 0 0 1.229-.444l1.624-7.27c.101-.484.059-1.035-.4-1.27a18.74 18.74 0 0 0-8.554-2.042c-2.937.001-5.874.668-8.552 2.041-.458.235-.511.717-.399 1.27l1.623 7.27a.94.94 0 0 0 1.23.445c.678-.311 1.496-.554 2.393-.729"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWindscreenDefrostTwoTone;
