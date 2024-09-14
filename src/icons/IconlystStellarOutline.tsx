import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStellarOutline = ({
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
      d="M12.248 6.01a5.986 5.986 0 0 0-5.986 5.985 6 6 0 0 0 .305 1.9.75.75 0 0 1-1.423.474 7.5 7.5 0 0 1-.382-2.374 7.486 7.486 0 0 1 7.486-7.485c1.037 0 2.027.21 2.927.592a.75.75 0 1 1-.587 1.38 6 6 0 0 0-2.34-.472M20.907 8.654a.75.75 0 0 1-.295 1.019l-16 8.8a.75.75 0 0 1-.723-1.314l16-8.8a.75.75 0 0 1 1.018.295"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.907 5.856a.75.75 0 0 1-.295 1.018l-16 8.8a.75.75 0 0 1-.723-1.314l16-8.8a.75.75 0 0 1 1.018.296M18.425 9.178a.75.75 0 0 1 .945.48c.24.737.372 1.519.372 2.337a7.49 7.49 0 0 1-7.493 7.493 7.5 7.5 0 0 1-2.675-.491.75.75 0 0 1 .536-1.4 6 6 0 0 0 2.139.391 5.99 5.99 0 0 0 5.993-5.993 6 6 0 0 0-.299-1.872.75.75 0 0 1 .482-.945"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStellarOutline;
