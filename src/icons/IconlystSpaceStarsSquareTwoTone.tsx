import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpaceStarsSquareTwoTone = ({
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
      d="M7.897 3h8.435c2.948 0 4.782 2.082 4.782 5.028v7.946c0 2.946-1.834 5.026-4.783 5.026H7.897c-2.948 0-4.783-2.08-4.783-5.026V8.028C3.114 5.082 4.958 3 7.897 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.531 9.078a4.02 4.02 0 0 1 2.586 2.585 4.02 4.02 0 0 1 2.585-2.585 4.02 4.02 0 0 1-2.585-2.586A4.02 4.02 0 0 1 6.53 9.078M9.847 15.581a3.4 3.4 0 0 1 2.184 2.184 3.4 3.4 0 0 1 2.184-2.184 3.4 3.4 0 0 1-2.184-2.184 3.4 3.4 0 0 1-2.184 2.184M14.208 10.9a2.91 2.91 0 0 1 1.872 1.873 2.91 2.91 0 0 1 1.873-1.873 2.91 2.91 0 0 1-1.873-1.872 2.91 2.91 0 0 1-1.872 1.872"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.24 7.146V7.14M16.704 15.846v-.007M7.343 14.043v-.007"
    />
  </Svg>
);
export default IconlystSpaceStarsSquareTwoTone;
