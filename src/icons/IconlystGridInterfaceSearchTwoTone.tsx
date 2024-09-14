import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGridInterfaceSearchTwoTone = ({
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
      d="M5.6 20.4h2.486c1.16 0 2.099-.94 2.099-2.1v-2.486a2.1 2.1 0 0 0-2.1-2.1H5.6c-1.16 0-2.099.94-2.099 2.1V18.3c0 1.16.94 2.099 2.1 2.099"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.847 19.14 1.654 1.65m-3.89-7.345a3.286 3.286 0 1 1 0 6.573 3.286 3.286 0 0 1 0-6.573"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.6 9.894h2.486c1.16 0 2.099-.94 2.099-2.1V5.309c0-1.16-.94-2.099-2.1-2.099H5.6c-1.16 0-2.099.94-2.099 2.1v2.486c0 1.16.94 2.099 2.1 2.099M16.105 9.894h2.487c1.16 0 2.099-.94 2.099-2.1V5.309c0-1.16-.94-2.099-2.1-2.099h-2.486c-1.16 0-2.1.94-2.1 2.1v2.486c0 1.16.94 2.099 2.1 2.099"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGridInterfaceSearchTwoTone;
