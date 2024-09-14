import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarsSquareTwoTone = ({
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
      d="M7.897 3h8.435c2.948 0 4.782 2.081 4.782 5.027v7.947c0 2.946-1.834 5.026-4.783 5.026H7.897c-2.948 0-4.783-2.08-4.783-5.026V8.027C3.114 5.081 4.958 3 7.897 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.667 10.657 3.2 1.037a.323.323 0 0 1 0 .614l-3.2 1.037a.32.32 0 0 0-.207.208l-1.038 3.2a.323.323 0 0 1-.614 0l-1.037-3.2a.32.32 0 0 0-.207-.208l-3.2-1.037a.323.323 0 0 1 0-.614l3.2-1.037a.32.32 0 0 0 .207-.207l1.037-3.2a.323.323 0 0 1 .614 0l1.038 3.2a.32.32 0 0 0 .207.207"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarsSquareTwoTone;
