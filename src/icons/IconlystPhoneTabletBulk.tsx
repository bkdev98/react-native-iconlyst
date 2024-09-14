import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneTabletBulk = ({
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
      d="M14.46 7.43h3.7c.448 0 .875.064 1.278.183.204.06.42-.086.42-.299v-1.34a3.907 3.907 0 0 0-3.901-3.904H6.84a3.907 3.907 0 0 0-3.902 3.903v10.205A3.906 3.906 0 0 0 6.84 20.08h2.981a.316.316 0 0 0 .304-.377 4 4 0 0 1-.064-.674V11.83c0-2.386 2.014-4.4 4.399-4.4"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.846 5.5a.75.75 0 0 1 .75-.75h1.606a.75.75 0 1 1 0 1.5h-1.606a.75.75 0 0 1-.75-.75M16.261 19.286a.757.757 0 1 1 0-1.515.757.757 0 0 1 0 1.515m1.9-10.357h-3.7c-1.57 0-2.9 1.328-2.9 2.9v7.2c0 1.572 1.33 2.9 2.9 2.9h3.7c1.572 0 2.9-1.328 2.9-2.9v-7.2a2.87 2.87 0 0 0-2.9-2.9"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneTabletBulk;
