import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitskiBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M17.136 10.655a1.4 1.4 0 0 1-.209.302c-.815.863-1.66 1.7-2.506 2.534-.242.24-.442.228-.69-.01a23 23 0 0 1-.889-.889c-.252-.268-.248-.466.017-.735.782-.788 1.564-1.577 2.361-2.35.185-.18.416-.334.653-.43.38-.156.817-.019 1.113.3.321.343.371.861.15 1.277m-5.85-2.365a1 1 0 0 1-.049.062c-.295.347-.628.665-.96.98-.259.243-.452.234-.712-.015a28 28 0 0 1-.847-.846c-.283-.294-.28-.489 0-.777.293-.3.583-.603.89-.886.343-.316.747-.43 1.182-.21.24.12.43.282.56.505.216.37.185.84-.065 1.187m10.507 1.433c-.133-1.196-.705-2.17-1.529-3.01-1.374-1.405-2.959-2.167-4.97-1.59-.267.075-.454-.03-.624-.254-.377-.492-.74-1.008-1.186-1.434-.914-.874-2.004-1.397-3.273-1.414-1.344.011-2.453.55-3.38 1.433-1.318 1.257-2.59 2.562-3.88 3.847-.378.376-.38.54.003.924q5.494 5.498 10.993 10.993c.378.377.541.37.923-.012 1.653-1.654 3.315-3.297 4.953-4.965a9.7 9.7 0 0 0 1.16-1.42c.618-.931.936-1.96.81-3.098"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.378 13.327a2 2 0 0 0-.24-.213.986.986 0 0 0-1.506.43c-.171.423-.073.801.248 1.122q3.512 3.513 7.026 7.026c.04.041.083.083.13.117.34.243.704.284 1.074.092.359-.186.525-.504.543-.896-.017-.34-.183-.59-.412-.819-2.29-2.284-4.575-4.573-6.863-6.859"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBitskiBulk;
