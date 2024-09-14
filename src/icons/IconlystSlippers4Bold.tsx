import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlippers4Bold = ({
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
      d="m13.072 10.275-3.36.764.059 2.325a.75.75 0 0 1-.73.769h-.02a.75.75 0 0 1-.75-.731l-.068-2.672-.757-.756a.75.75 0 1 1 1.06-1.061l.702.702 3.532-.803a.75.75 0 0 1 .332 1.463m7.178 2.59a1192 1192 0 0 0-6.651-7.975c-2.537-2.531-6.665-2.53-9.202 0-2.533 2.537-2.533 6.669.032 9.237 0 0 5.15 4.32 7.94 6.624a5.47 5.47 0 0 0 3.483 1.248c1.44 0 2.88-.564 3.982-1.671 2.05-2.044 2.229-5.252.416-7.462"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSlippers4Bold;
