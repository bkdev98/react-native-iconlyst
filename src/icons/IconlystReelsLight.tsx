import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReelsLight = ({
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
      d="M16.008 21H7.995c-2.8 0-4.544-1.977-4.544-4.775v-8.45C3.451 4.979 5.195 3 7.996 3h8.012c2.8 0 4.543 1.978 4.543 4.776v8.45c0 2.797-1.75 4.774-4.543 4.774"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.141 15.171a9 9 0 0 1-2.63 1.651c-.85.335-1.562-.083-1.666-.92a16.4 16.4 0 0 1 0-3.518c.114-.87.897-1.24 1.665-.917a8.8 8.8 0 0 1 2.631 1.651c.655.594.67 1.437 0 2.053"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.457 7.477h17.086M9.023 7.476V3m5.954 4.476V3"
    />
  </Svg>
);
export default IconlystReelsLight;
