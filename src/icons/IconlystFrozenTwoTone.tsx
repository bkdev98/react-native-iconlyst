import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFrozenTwoTone = ({
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
      d="m12.595 3.297 2.055 4.111c.091.182.277.297.48.297h4.5c.443 0 .696.505.43.859l-2.335 3.114a.54.54 0 0 0 0 .644l2.335 3.114a.537.537 0 0 1-.43.859h-4.5a.54.54 0 0 0-.48.297l-2.055 4.111a.537.537 0 0 1-.96 0l-2.056-4.111a.54.54 0 0 0-.48-.297h-4.5a.537.537 0 0 1-.43-.86l2.335-3.113a.54.54 0 0 0 0-.644L4.17 8.564a.537.537 0 0 1 .43-.859h4.5c.203 0 .389-.115.48-.297l2.055-4.111a.537.537 0 0 1 .96 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.115 12 2.684-4.295M12.115 12 9.43 7.705M12.115 12H6.746m5.369 0L9.43 16.295M12.115 12l2.684 4.295M12.115 12h5.368"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFrozenTwoTone;
