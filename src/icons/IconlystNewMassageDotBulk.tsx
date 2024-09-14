import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewMassageDotBulk = ({
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
      d="M13.095 5.289c0-.906.217-1.76.593-2.521H7.587c-3.118 0-5.213 2.192-5.213 5.455v7.845c0 3.26 2.095 5.453 5.213 5.453h8.324c3.119 0 5.216-2.192 5.216-5.453v-5.55a5.7 5.7 0 0 1-2.31.493 5.73 5.73 0 0 1-5.722-5.722"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.771 8.19a2.86 2.86 0 0 0 2.855-2.855 2.86 2.86 0 0 0-2.855-2.856 2.86 2.86 0 0 0-2.856 2.856 2.86 2.86 0 0 0 2.856 2.856M12.487 16.303H7.72a.75.75 0 0 1 0-1.5h4.768a.75.75 0 0 1 0 1.5m-4.768-5.69h1.946a.75.75 0 0 1 0 1.5H7.72a.75.75 0 0 1 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNewMassageDotBulk;
