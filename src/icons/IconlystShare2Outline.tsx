import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShare2Outline = ({
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
      d="M12 3.943c-.851 0-1.553.699-1.553 1.575 0 .877.702 1.575 1.553 1.575.85 0 1.553-.698 1.553-1.575 0-.876-.703-1.575-1.554-1.575M8.947 5.518c0-1.691 1.36-3.075 3.053-3.075s3.053 1.384 3.053 3.075-1.36 3.075-3.054 3.075c-1.692 0-3.052-1.384-3.052-3.075M5.303 15.542c-.85 0-1.553.698-1.553 1.574s.702 1.575 1.553 1.575c.85 0 1.553-.698 1.553-1.575 0-.876-.702-1.574-1.553-1.574M2.25 17.116c0-1.69 1.36-3.074 3.053-3.074s3.053 1.383 3.053 3.074c0 1.692-1.36 3.075-3.053 3.075S2.25 18.808 2.25 17.116m16.447-1.574c-.85 0-1.553.698-1.553 1.574s.702 1.575 1.553 1.575c.85 0 1.553-.698 1.553-1.575 0-.876-.702-1.574-1.553-1.574m-3.053 1.574c0-1.69 1.36-3.074 3.053-3.074s3.053 1.383 3.053 3.074c0 1.692-1.36 3.075-3.053 3.075s-3.053-1.383-3.053-3.075"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.416 5.326a.75.75 0 0 1-.49.94 7.06 7.06 0 0 0-4.906 6.739c0 .607.074 1.187.214 1.753a.75.75 0 1 1-1.456.362 8.7 8.7 0 0 1-.258-2.115 8.56 8.56 0 0 1 5.955-8.17.75.75 0 0 1 .94.49M17.702 18.314a.75.75 0 0 1-.051 1.06 8.38 8.38 0 0 1-5.653 2.183 8.4 8.4 0 0 1-5.645-2.166.75.75 0 1 1 1.005-1.114 6.9 6.9 0 0 0 4.64 1.78 6.88 6.88 0 0 0 4.644-1.794.75.75 0 0 1 1.06.051M13.59 5.324a.75.75 0 0 1 .942-.488 8.56 8.56 0 0 1 5.944 8.169c0 .72-.09 1.433-.259 2.108a.75.75 0 0 1-1.455-.366c.14-.555.214-1.144.214-1.742a7.06 7.06 0 0 0-4.898-6.74.75.75 0 0 1-.488-.941"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShare2Outline;