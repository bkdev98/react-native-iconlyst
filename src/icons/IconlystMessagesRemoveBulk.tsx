import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesRemoveBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M4.04 5.214a.75.75 0 0 0-1.062 1.059l1.176 1.18c-1.514 2.638-1.736 5.902-.432 8.728.19.476.316.809.316 1.092 0 .334-.141.749-.278 1.15-.265.78-.565 1.663.078 2.309.649.649 1.532.344 2.31.074.398-.136.809-.278 1.134-.28.293 0 .663.149 1.069.313a9.45 9.45 0 0 0 3.982.877c1.663 0 3.31-.44 4.764-1.278l1.462 1.467a.746.746 0 0 0 1.06.002.75.75 0 0 0 .002-1.06z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.072 5.452a9.43 9.43 0 0 0-6.719-2.79c-2.29 0-4.45.815-6.168 2.294a.197.197 0 0 0-.01.288l13.1 13.141a.197.197 0 0 0 .29-.01c3.19-3.738 3.032-9.384-.493-12.923"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMessagesRemoveBulk;
