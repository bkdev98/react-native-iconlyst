import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReels2Light = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.349 21H7.653c-2.661 0-4.317-1.878-4.317-4.536V7.536C3.336 4.878 4.992 3 7.654 3h8.695c2.66 0 4.315 1.878 4.315 4.536v8.928c0 2.658-1.662 4.536-4.315 4.536M7.691 20.977v-3.622m4.287 3.622v-3.622m4.287 3.622v-3.622M3.45 17.352h17.104M20.552 6.648H3.447M7.691 3v3.646M11.978 3v3.646M16.265 3v3.646"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.227 13.027a9 9 0 0 1-2.63 1.65c-.85.335-1.562-.082-1.666-.92a16.4 16.4 0 0 1 0-3.518c.114-.87.897-1.24 1.665-.916a8.8 8.8 0 0 1 2.63 1.651c.656.593.672 1.436 0 2.053"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReels2Light;
