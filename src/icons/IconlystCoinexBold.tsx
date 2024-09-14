import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoinexBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.517 22c-5.514 0-10-4.486-10-10s4.486-10 10-10a9.94 9.94 0 0 1 8.853 5.358c.201.387.128.859-.179 1.168l-2.483 2.49a1 1 0 1 1-1.416-1.412l1.942-1.948A7.95 7.95 0 0 0 12.517 4c-4.41 0-8 3.589-8 8s3.59 8 8 8a7.96 7.96 0 0 0 6.695-3.628l-5.647-5.645a1.8 1.8 0 0 0-2.54.009 1.776 1.776 0 0 0-.002 2.526c.678.678 1.857.677 2.533.001a.999.999 0 1 1 1.414 1.414c-1.432 1.431-3.93 1.431-5.36 0A3.76 3.76 0 0 1 8.498 12c0-1.011.395-1.962 1.113-2.678a3.8 3.8 0 0 1 5.367-.01l6.194 6.19c.31.311.382.786.178 1.174A9.96 9.96 0 0 1 12.517 22"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCoinexBold;
