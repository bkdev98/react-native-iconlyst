import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarEngineTwoTone = ({
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
      d="M12.149 4.021v3.034m-2.022-3.034h4.044M3.25 10.21v6.067m2.831-3.034H3.25"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.955 10.889-1.742-3.3a1 1 0 0 0-.884-.534h-3.66A1 1 0 0 0 10 7.31L8.55 8.611a1 1 0 0 1-.668.255h-.64a1 1 0 0 0-1 1v6.079a1 1 0 0 0 1 1h.505a1 1 0 0 1 .817.423l1.545 2.188a1 1 0 0 0 .816.422h4.245a1 1 0 0 0 1-1v-2.033"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.955 10.888h1.421V9.865a1 1 0 0 1 1-1h1.034a1 1 0 0 1 1 1v8.102a1 1 0 0 1-1 1h-1.034a1 1 0 0 1-1-1v-1.023H16.17"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCarEngineTwoTone;
