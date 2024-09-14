import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudLockTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.064 17.477a4.14 4.14 0 0 0 2.436-3.774c0-2.596-1.83-4.139-4.103-4.141 0-1.631-1.28-4.898-4.897-4.898S7.603 7.931 7.603 9.562c-2.27.021-4.103 1.545-4.103 4.141 0 1.68 1 3.126 2.436 3.774"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.987 19.902h-2.969c-.813 0-1.473-.66-1.473-1.473v-1.667c0-.813.66-1.473 1.473-1.473h2.968c.814 0 1.474.66 1.474 1.473v1.667c0 .813-.66 1.473-1.474 1.473"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.272 15.319v-1.096a1.772 1.772 0 0 0-3.543-.008v1.104"
    />
  </Svg>
);
export default IconlystCloudLockTwoTone;
